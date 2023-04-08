import './App.css';
import EmailEditor from 'react-email-editor';
import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {newTemplateDesign, sample} from "./sample";

function App() {
    const apiEndpoint = "https://gdzavroudg.execute-api.ap-southeast-1.amazonaws.com/"
    const emailEditorRef = useRef(null);
    const [preview, setPreview] = useState(false);
    const [templates, setTemplates] = useState([]);
    const [allTemplates, setAllTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [triggerAutoSave, setTriggerAutoSave] = useState(false);

    useEffect(() => {
        // find savedTemplates and log the values - for dropdown
        const savedTemplates = Object.keys(localStorage).filter(key => key.endsWith('.json'));
        fetchData()
        setTemplates(savedTemplates);
    }, []);

    async function fetchData() {
        try {
            const response = await fetch(apiEndpoint, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json()
            setAllTemplates(data)
            if (response.status === 429) {
                const { error } = await response.json();
                console.log(error)
                alert(error);
            }
        } catch (e) {
            alert('Something went wrong. Please try again.');
        } finally {
            console.log('get all templates');
        }
    }

    useEffect(() => {
        if (triggerAutoSave) {
            // save every 1 minute
            const interval = setInterval(() => {
                emailEditorRef.current?.editor?.saveDesign((design) => {
                    localStorage.setItem(`${selectedTemplate}`, JSON.stringify(design));
                    // show toast on the right
                    toast.success('Saved!', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
            }, 60000);

            return () => clearInterval(interval);
        }
    }, [triggerAutoSave, selectedTemplate]);

    const selectTemplate = (event) => {
        const selectedTemplateName = event.target.value;
        setSelectedTemplate(selectedTemplateName);
    };

    const exportHtml = (e) => {
        emailEditorRef.current?.editor?.exportHtml(async (data) => {
            const { html } = data;

            // export as HTML file as downloadable to root folder called email-template
            const fileName = 'email-template.html';
            const blob = new Blob([html], { type: 'text/html' });
            const href = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = href;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    const sendEmail = (e) => {
        emailEditorRef.current?.editor?.exportHtml(async (data) => {
            const { html } = data;

            try {
                e.preventDefault();

                const response = await fetch(apiEndpoint + "email", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        html
                    }),
                });

                if (response.status === 429) {
                    const { error } = await response.json();
                    console.log(error)
                    alert(error);
                }
            } catch (e) {
                alert('Something went wrong. Please try again.');
            } finally {
                console.log('finish');
            }

        });
    };

    const togglePreview = () => {
        if (preview) {
            emailEditorRef.current?.editor?.hidePreview();
            setPreview(false);
        } else {
            // save design first
            emailEditorRef.current?.editor?.saveDesign((design) => {
                localStorage.setItem(`${selectedTemplate}`, JSON.stringify(design));
            });

            emailEditorRef.current?.editor?.showPreview('tablet');
            setPreview(true);
        }
    };

    const importDesign = () => {
        // import as JSON file
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = (readerEvent) => {
                const content = readerEvent.target.result;
                emailEditorRef.current?.editor?.loadDesign(JSON.parse(content));
            };
        }
        fileInput.click();
    };

    const exportDesign = () => {
    }

    const newTemplate = () => {
        // ask for template name

        const name = prompt('Enter template name:', 'template.json');

        if (!name) {
            return;
        }

        // update dropdown
        const dropdown = document.getElementById('select-design');
        const option = document.createElement('option');
        option.value = name;
        option.text = name;
        dropdown.add(option, 0);
        // set dropdown value to new template
        dropdown.value = name;

        // set template name as key and value as empty object for design
        localStorage.setItem(name, JSON.stringify(newTemplateDesign));

        // load empty design
        emailEditorRef.current?.editor?.loadDesign(newTemplateDesign);

        // set selected template to new template
        setSelectedTemplate(name);
    };

    const onReady = () => {
        const templateName = selectedTemplate;

        if (templateName) {
            const template = localStorage.getItem(templateName);
            emailEditorRef.current?.editor?.loadDesign(JSON.parse(template));
            setTriggerAutoSave(true);
        } else {
            emailEditorRef.current?.editor?.loadDesign(sample);
            setTriggerAutoSave(false);
        }
    };

    const deleteTemplate = () => {
        // get template name
        const templateName = selectedTemplate;

        // ask if user wants to delete template
        const confirmDelete = window.confirm(`Are you sure you want to delete ${templateName}?`);

        if (!confirmDelete) {
            return;
        }

        // remove template from dropdown
        const dropdown = document.getElementById('select-design');
        const options = dropdown.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === templateName) {
                dropdown.remove(i);
                break;
            }
        }

        // remove template from local storage
        localStorage.removeItem(templateName);

        // load sample design
        emailEditorRef.current?.editor?.loadDesign(sample);

        // set selected template to null
        setSelectedTemplate(null);
    };

    const saveTemplate = () => {
        // get template name
        const templateName = selectedTemplate;

        // save design to local storage
        emailEditorRef.current?.editor?.saveDesign( (design) => {
            localStorage.setItem(templateName, JSON.stringify(design));
            toast.success('Design saved');
        });

    };

    async function saveTemplateToDatabase(e) {
        emailEditorRef.current?.editor?.saveDesign(async (design) => {
            try {
                e.preventDefault();

                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: selectedTemplate,
                        data: design
                    }),
                });

                if (response.status === 429) {
                    const {error} = await response.json();
                    console.log(error)
                    alert(error);
                }
            } catch (e) {
                alert('Something went wrong. Please try again.');
            } finally {
                toast.success('Design saved to databse');
            }
        })
    }

    // detect if user is not using app, save design straight away
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // save design to local storage
                emailEditorRef.current?.editor?.saveDesign((design) => {
                    localStorage.setItem(selectedTemplate, JSON.stringify(design));
                    toast.success('Design saved');
                });
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange, false);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [selectedTemplate]);

    return (
        <div className="App bg-black text-slate-12 font-sans">
            <Toaster />

            <div className="flex flex-col justify-between">
                <aside className="py-6 px-3 flex gap-5 flex-col justify-center items-center">

                    <div className="flex flex-row w-1/2">
                        <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Template</label>
                        <select onChange={selectTemplate} id="select-design" name="select-design" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                            <option selected disabled>Choose...</option>
                            {templates.map((template) => (
                                <option key={template} defaultValue={template}>{template}</option>
                            ))}
                        </select>
                        <button onClick={deleteTemplate} type="button" className="ml-2 px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Delete Template
                        </button>
                        <button onClick={saveTemplate} type="button" className="ml-2 px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Save Template
                        </button>
                        <button onClick={saveTemplateToDatabase} type="button" className="ml-2 px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Save To Database
                        </button>
                    </div>

                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button onClick={togglePreview} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            {preview ? 'Hide' : 'Show'} Preview
                        </button>

                        {/* <button onClick={saveDesign} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Save Design
                        </button> */}

                        <button onClick={newTemplate} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            New Template
                        </button>

                        <button onClick={importDesign} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Import Design
                        </button>
                        
                        <button onClick={exportDesign} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Export Design
                        </button>

                        <button onClick={sendEmail} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Send Email
                        </button>

                        <button onClick={exportHtml} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Export HTML
                        </button>
                    </div>

                    <div className="text-white">{selectedTemplate ? "editing: " + selectedTemplate : 'No Template Selected'}</div>
                </aside>

                <main>
                    <EmailEditor
                        ref={emailEditorRef}
                        onReady={onReady}
                        projectId={151763}
                        options={{
                            appearance: {
                                theme: "dark",
                            },
                            features: {
                                textEditor: {
                                    // fontSizes: ["70px", "60px", "50px"],
                                },
                            },
                            fonts: {
                                showDefaultFonts: false,
                                customFonts: [
                                    // paid feature
                                    // {
                                    // 	label: "Comic Sans",
                                    // 	value: "'Comic Sans MS', cursive, sans-serif",
                                    // },
                                    // {
                                    // 	label: "DotGothic16",
                                    // 	value: "'DotGothic16',cursive",
                                    // 	url: "https://fonts.googleapis.com/css?family=DotGothic16",
                                    // },
                                ],
                            },
                        }
                        }
                    />
                </main>
            </div>

        </div>
    );
}

export default App;