import './App.css';
import EmailEditor from 'react-email-editor';
import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const sample = {
    "counters": {
        "u_row": 8,
        "u_column": 12,
        "u_content_text": 9,
        "u_content_image": 4,
        "u_content_button": 1,
        "u_content_social": 1,
        "u_content_custom_Icon_List": 1
    },
    "body": {
        "id": "-s0oZ1z3pS",
        "rows": [{
            "id": "1W1XgwwKUU",
            "cells": [1],
            "columns": [{
                "id": "vul2KceSwp",
                "contents": [{
                    "id": "zP_l3dQ3lO",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "color": "#afb0c7",
                        "textAlign": "center",
                        "lineHeight": "170%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_1",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 170%;\"><span style=\"font-size: 14px; line-height: 23.8px;\">View Email in Browser</span></p>",
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_1",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_1",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "ezgDhTY_b0",
            "cells": [1],
            "columns": [{
                "id": "J1CZkrEXI-",
                "contents": [{
                    "id": "uDPn3LOS7-",
                    "type": "image",
                    "values": {
                        "containerPadding": "20px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn.templates.unlayer.com/assets/1597218426091-xx.png",
                            "width": 537,
                            "height": 137,
                            "maxWidth": "32%",
                            "autoWidth": false
                        },
                        "textAlign": "center",
                        "altText": "Image",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_1",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_2",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_2",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "hM4pj639qq",
            "cells": [1],
            "columns": [{
                "id": "_EE55lttLK",
                "contents": [{
                    "id": "QoYOeBeCJ0",
                    "type": "image",
                    "values": {
                        "containerPadding": "40px 10px 10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png",
                            "width": 335,
                            "height": 93,
                            "maxWidth": "26%",
                            "autoWidth": false
                        },
                        "textAlign": "center",
                        "altText": "Image",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_2",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "hideMobile": false
                    }
                }, {
                    "id": "SRJ9h7uF9H",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "color": "#e5eaf5",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_3",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 140%;\"><strong>T H A N K S&nbsp; &nbsp;F O R&nbsp; &nbsp;S I G N I N G&nbsp; &nbsp;U P !</strong></p>",
                        "hideMobile": false
                    }
                }, {
                    "id": "63REKy5tAv",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "0px 10px 31px",
                        "anchor": "",
                        "color": "#e5eaf5",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_4",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 28px; line-height: 39.2px;\"><strong><span style=\"line-height: 39.2px; font-size: 28px;\">Verify Your E-mail Address&nbsp;</span></strong></span></p>",
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_3",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#003399",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_3",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "emKtYooaeG",
            "cells": [1],
            "columns": [{
                "id": "2vv0v7Rt0M",
                "contents": [{
                    "id": "Md9QUwEWEJ",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "33px 55px",
                        "anchor": "",
                        "textAlign": "center",
                        "lineHeight": "160%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_6",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 22px; line-height: 35.2px;\">Hi, </span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 18px; line-height: 28.8px;\">You're almost ready to get started. Please click on the button below to verify your email address and enjoy exclusive cleaning services with us! </span></p>",
                        "hideMobile": false
                    }
                }, {
                    "id": "2TXRqkuwZY",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#ff6600",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "14px 44px 13px",
                        "border": {},
                        "borderRadius": "4px",
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_button_1",
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\"><strong><span style=\"line-height: 16.8px;\">VERIFY YOUR EMAIL</span></strong></span>",
                        "hideMobile": false,
                        "calculatedWidth": 216,
                        "calculatedHeight": 44
                    }
                }, {
                    "id": "_kLCb6zwHT",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "33px 55px 60px",
                        "anchor": "",
                        "textAlign": "center",
                        "lineHeight": "160%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_7",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 160%; font-size: 14px;\"><span style=\"font-size: 18px; line-height: 28.8px;\">Thanks,</span></p>\n<p style=\"line-height: 160%; font-size: 14px;\"><span style=\"font-size: 18px; line-height: 28.8px;\">The Company Team</span></p>",
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_4",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_4",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "Y5zeKvydch",
            "cells": [1],
            "columns": [{
                "id": "Gm-g9PmH_f",
                "contents": [{
                    "id": "8RdLkS93Kh",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "41px 55px 18px",
                        "anchor": "",
                        "color": "#003399",
                        "textAlign": "center",
                        "lineHeight": "160%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_5",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 20px; line-height: 32px;\"><strong>Get in touch</strong></span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; color: #000000;\">+11 111 333 4444</span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; color: #000000;\">Info@YourCompany.com</span></p>",
                        "hideMobile": false
                    }
                }, {
                    "id": "7NwXqjv5_R",
                    "type": "social",
                    "values": {
                        "containerPadding": "10px 10px 33px",
                        "anchor": "",
                        "icons": {
                            "iconType": "circle-white",
                            "icons": [{
                                "url": "https://facebook.com/",
                                "name": "Facebook"
                            }, {
                                "url": "https://linkedin.com/",
                                "name": "LinkedIn"
                            }, {
                                "url": "https://instagram.com/",
                                "name": "Instagram"
                            }, {
                                "url": "https://youtube.com/",
                                "name": "YouTube"
                            }, {
                                "url": "https://email.com/",
                                "name": "Email"
                            }],
                            "editor": {
                                "data": {
                                    "showDefaultIcons": true,
                                    "showDefaultOptions": true,
                                    "customIcons": [],
                                    "customOptions": []
                                }
                            }
                        },
                        "align": "center",
                        "spacing": 17,
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_social_1",
                            "htmlClassNames": "u_content_social"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_5",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#e5eaf5",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_5",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "CVOhSjrDAT",
            "cells": [1],
            "columns": [{
                "id": "53bjbIZMgb",
                "contents": [{
                    "id": "K3XQanw7_U",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "color": "#fafafa",
                        "textAlign": "center",
                        "lineHeight": "180%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_8",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 180%;\"><span style=\"font-size: 16px; line-height: 28.8px;\">Copyrights &copy; Company All Rights Reserved</span></p>",
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_6",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#003399",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_6",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }],
        "values": {
            "popupPosition": "center",
            "popupWidth": "600px",
            "popupHeight": "auto",
            "borderRadius": "10px",
            "contentAlign": "center",
            "contentVerticalAlign": "center",
            "contentWidth": "600px",
            "fontFamily": {
                "label": "Cabin",
                "value": "'Cabin',sans-serif",
                "url": "https://fonts.googleapis.com/css?family=Cabin:400,700",
                "defaultFont": true
            },
            "textColor": "#000000",
            "popupBackgroundColor": "#FFFFFF",
            "popupBackgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "cover",
                "position": "center"
            },
            "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
            "popupCloseButton_position": "top-right",
            "popupCloseButton_backgroundColor": "#DDDDDD",
            "popupCloseButton_iconColor": "#000000",
            "popupCloseButton_borderRadius": "0px",
            "popupCloseButton_margin": "0px",
            "popupCloseButton_action": {
                "name": "close_popup",
                "attrs": {
                    "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                }
            },
            "backgroundColor": "#f9f9f9",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "top-center",
                "customPosition": ["50%", "0%"]
            },
            "preheaderText": "",
            "linkStyle": {
                "body": true,
                "linkColor": "#0000ee",
                "linkHoverColor": "#0000ee",
                "linkUnderline": true,
                "linkHoverUnderline": true
            },
            "_meta": {
                "htmlID": "u_body",
                "htmlClassNames": "u_body"
            }
        }
    },
    "schemaVersion": 13
}

const newTemplateDesign = {
    "counters": {
        "u_row": 8,
        "u_column": 12,
        "u_content_text": 9,
        "u_content_image": 4,
        "u_content_button": 1,
        "u_content_social": 1,
        "u_content_custom_Icon_List": 1
    },
    "body": {
        "id": "-s0oZ1z3pS",
        "rows": [{
            "id": "ezgDhTY_b0",
            "cells": [1],
            "columns": [{
                "id": "J1CZkrEXI-",
                "contents": [{
                    "id": "uDPn3LOS7-",
                    "type": "image",
                    "values": {
                        "containerPadding": "20px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn.templates.unlayer.com/assets/1597218426091-xx.png",
                            "width": 537,
                            "height": 137,
                            "maxWidth": "32%",
                            "autoWidth": false
                        },
                        "textAlign": "center",
                        "altText": "Image",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_1",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_2",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_2",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "hM4pj639qq",
            "cells": [1],
            "columns": [{
                "id": "_EE55lttLK",
                "contents": [{
                    "id": "QoYOeBeCJ0",
                    "type": "image",
                    "values": {
                        "containerPadding": "40px 10px 10px",
                        "anchor": "",
                        "src": {
                            "url": "https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png",
                            "width": 335,
                            "height": 93,
                            "maxWidth": "26%",
                            "autoWidth": false
                        },
                        "textAlign": "center",
                        "altText": "Image",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_2",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "hideMobile": false
                    }
                }, {
                    "id": "SRJ9h7uF9H",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "color": "#e5eaf5",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_3",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 140%;\"><strong>T H A N K S&nbsp; &nbsp;F O R&nbsp; &nbsp;S I G N I N G&nbsp; &nbsp;U P !</strong></p>",
                        "hideMobile": false
                    }
                }, {
                    "id": "63REKy5tAv",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "0px 10px 31px",
                        "anchor": "",
                        "color": "#e5eaf5",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_4",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 28px; line-height: 39.2px;\"><strong><span style=\"line-height: 39.2px; font-size: 28px;\">Verify Your E-mail Address&nbsp;</span></strong></span></p>",
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_3",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#003399",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_3",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "emKtYooaeG",
            "cells": [1],
            "columns": [{
                "id": "2vv0v7Rt0M",
                "contents": [{
                    "id": "Md9QUwEWEJ",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "33px 55px",
                        "anchor": "",
                        "textAlign": "center",
                        "lineHeight": "160%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_6",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 22px; line-height: 35.2px;\">Hi, </span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 18px; line-height: 28.8px;\">You're almost ready to get started. Please click on the button below to verify your email address and enjoy exclusive cleaning services with us! </span></p>",
                        "hideMobile": false
                    }
                }, {
                    "id": "2TXRqkuwZY",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#ff6600",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "14px 44px 13px",
                        "border": {},
                        "borderRadius": "4px",
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_button_1",
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\"><strong><span style=\"line-height: 16.8px;\">VERIFY YOUR EMAIL</span></strong></span>",
                        "hideMobile": false,
                        "calculatedWidth": 216,
                        "calculatedHeight": 44
                    }
                }, {
                    "id": "_kLCb6zwHT",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "33px 55px 60px",
                        "anchor": "",
                        "textAlign": "center",
                        "lineHeight": "160%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_7",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 160%; font-size: 14px;\"><span style=\"font-size: 18px; line-height: 28.8px;\">Thanks,</span></p>\n<p style=\"line-height: 160%; font-size: 14px;\"><span style=\"font-size: 18px; line-height: 28.8px;\">The Company Team</span></p>",
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_4",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_4",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "Y5zeKvydch",
            "cells": [1],
            "columns": [{
                "id": "Gm-g9PmH_f",
                "contents": [{
                    "id": "8RdLkS93Kh",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "41px 55px 18px",
                        "anchor": "",
                        "color": "#003399",
                        "textAlign": "center",
                        "lineHeight": "160%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_5",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 20px; line-height: 32px;\"><strong>Get in touch</strong></span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; color: #000000;\">+11 111 333 4444</span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; color: #000000;\">Info@YourCompany.com</span></p>",
                        "hideMobile": false
                    }
                }, {
                    "id": "7NwXqjv5_R",
                    "type": "social",
                    "values": {
                        "containerPadding": "10px 10px 33px",
                        "anchor": "",
                        "icons": {
                            "iconType": "circle-white",
                            "icons": [{
                                "url": "https://facebook.com/",
                                "name": "Facebook"
                            }, {
                                "url": "https://linkedin.com/",
                                "name": "LinkedIn"
                            }, {
                                "url": "https://instagram.com/",
                                "name": "Instagram"
                            }, {
                                "url": "https://youtube.com/",
                                "name": "YouTube"
                            }, {
                                "url": "https://email.com/",
                                "name": "Email"
                            }],
                            "editor": {
                                "data": {
                                    "showDefaultIcons": true,
                                    "showDefaultOptions": true,
                                    "customIcons": [],
                                    "customOptions": []
                                }
                            }
                        },
                        "align": "center",
                        "spacing": 17,
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_social_1",
                            "htmlClassNames": "u_content_social"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_5",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#e5eaf5",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_5",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }, {
            "id": "CVOhSjrDAT",
            "cells": [1],
            "columns": [{
                "id": "53bjbIZMgb",
                "contents": [{
                    "id": "K3XQanw7_U",
                    "type": "text_deprecated",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "color": "#fafafa",
                        "textAlign": "center",
                        "lineHeight": "180%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_8",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"font-size: 14px; line-height: 180%;\"><span style=\"font-size: 16px; line-height: 28.8px;\">Copyrights &copy; Company All Rights Reserved</span></p>",
                        "hideMobile": false
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_6",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#003399",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "top-center",
                    "customPosition": ["50%", "0%"]
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_6",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true,
                "hideMobile": false,
                "noStackMobile": false
            }
        }],
        "values": {
            "popupPosition": "center",
            "popupWidth": "600px",
            "popupHeight": "auto",
            "borderRadius": "10px",
            "contentAlign": "center",
            "contentVerticalAlign": "center",
            "contentWidth": "600px",
            "fontFamily": {
                "label": "Cabin",
                "value": "'Cabin',sans-serif",
                "url": "https://fonts.googleapis.com/css?family=Cabin:400,700",
                "defaultFont": true
            },
            "textColor": "#000000",
            "popupBackgroundColor": "#FFFFFF",
            "popupBackgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "cover",
                "position": "center"
            },
            "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
            "popupCloseButton_position": "top-right",
            "popupCloseButton_backgroundColor": "#DDDDDD",
            "popupCloseButton_iconColor": "#000000",
            "popupCloseButton_borderRadius": "0px",
            "popupCloseButton_margin": "0px",
            "popupCloseButton_action": {
                "name": "close_popup",
                "attrs": {
                    "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                }
            },
            "backgroundColor": "#f9f9f9",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "top-center",
                "customPosition": ["50%", "0%"]
            },
            "preheaderText": "",
            "linkStyle": {
                "body": true,
                "linkColor": "#0000ee",
                "linkHoverColor": "#0000ee",
                "linkUnderline": true,
                "linkHoverUnderline": true
            },
            "_meta": {
                "htmlID": "u_body",
                "htmlClassNames": "u_body"
            }
        }
    },
    "schemaVersion": 13
}

function App() {
    const emailEditorRef = useRef(null);
    const [preview, setPreview] = useState(false);
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [triggerAutoSave, setTriggerAutoSave] = useState(false);

    useEffect(() => {
        // find savedTemplates and log the values - for dropdown
        const savedTemplates = Object.keys(localStorage).filter(key => key.endsWith('.json'));
        setTemplates(savedTemplates);
    }, []);

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

    const exportHtml = () => {
        emailEditorRef.current?.editor?.exportHtml((data) => {
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
        emailEditorRef.current?.editor?.saveDesign((design) => {
            localStorage.setItem(templateName, JSON.stringify(design));
            toast.success('Design saved');
        });
    };

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