GS.dataCache['EDF8C9409BD60246128887886A5864E78E59'] = {
    "uid": "EDF8C9409BD60246128887886A5864E78E59",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Change",
        "type": "vn.scene",
        "parentId": "D0E25D70727F1447F5196F328791B25FA158",
        "chapterUid": "D0E25D70727F1447F5196F328791B25FA158",
        "order": 6,
        "localizableStrings": {},
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "change.png",
                        "folderPath": "Graphics/Backgrounds",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7E4EA6CF861F8846E46A6064D1075A726C3B"
            },
            {
                "id": "vn.ZoomBackground",
                "params": {
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 200,
                        "y": 200
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "4AABF05F56B41446A119A133415E4EB117A3"
            },
            {
                "id": "vn.ScrollBackgroundTo",
                "params": {
                    "layer": 0,
                    "predefinedPositionId": 0,
                    "positionType": 1,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "background": {
                        "previewBackground": {
                            "name": "change.png",
                            "folderPath": "Graphics/Backgrounds",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0
                            }
                        },
                        "previewZoom": 100,
                        "location": {
                            "x": -2,
                            "y": -336,
                            "angle": 0,
                            "zoom": 1,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "64F068E33918E944B119E9C296104F6B55DB"
            },
            {
                "id": "gs.MessageSettings",
                "params": {
                    "useCharacterColor": 0,
                    "paragraphSpacing": 0,
                    "backlog": 1,
                    "bold": 0,
                    "italic": 0,
                    "linePadding": 6,
                    "lineHeight": 0,
                    "lineSpacing": 0,
                    "smallCaps": 0,
                    "underline": 0,
                    "strikeThrough": 0,
                    "autoErase": 1,
                    "waitAtEnd": 1,
                    "font": "Verdana",
                    "size": 40,
                    "outline": 0,
                    "outlineSize": 4,
                    "shadow": 0,
                    "shadowOffsetX": 1,
                    "shadowOffsetY": 1,
                    "color": {
                        "red": 255,
                        "green": 255,
                        "blue": 255,
                        "alpha": 255
                    },
                    "outlineColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "shadowColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "fieldFlags": {
                        "autoErase": 1,
                        "waitAtEnd": 1,
                        "backlog": 1,
                        "font": 1,
                        "size": 1
                    }
                },
                "indent": 0,
                "uid": "C6C29E5E99EEA7485F589642D1D78A885854"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "You pass on the knowledge you have to them."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F881B7C632C32744B7180B60C96E09F6FE08",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "A84B24E0678CB5486E795B701FC041171634"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 8,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 1,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "spring.png",
                        "folderPath": "Graphics/Backgrounds",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "indent": 0,
                "uid": "2CE2214A12CE4445672B4F03C5B78286975A"
            },
            {
                "id": "gs.ZoomPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 200,
                        "y": 200
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "44FF3C4A959AB4449C2A6DA8015533F56359"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Get spring"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 884,
                        "y": 288,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7A9900586B87B8446E8B58E90EBA1D190AD0"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "C9EB7A0637D5D1435138DE882760AC4F9CFD"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 8,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 1,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "summer.jpg",
                        "folderPath": "Graphics/Backgrounds",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "indent": 0,
                "uid": "337ECA837BAFE0485F6B2E283D05C72CF2A2"
            },
            {
                "id": "gs.ZoomPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 200,
                        "y": 200
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "539F29988E05E549141BC268C17A63886F57"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Get summer"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 764,
                        "y": 898,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F50C90CB65D7C1447D798654101F0BA28524"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "52286ACF226042499C78E9E3EBA2048336A8"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 8,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 1,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "autumn.png",
                        "folderPath": "Graphics/Backgrounds",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "indent": 0,
                "uid": "56B9B38C57AE6045631B63C330C93FCDF080"
            },
            {
                "id": "gs.ZoomPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 200,
                        "y": 200
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "AB53201D336BA648674AB969D7531DE9FAA8"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Get autumn"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 1574,
                        "y": 152,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AE67C561294AD24E5B2872C5BF32ECBAD98B"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "764F414B3C09F64D1A8923142326A1FCE028"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 8,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 1,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "winter.png",
                        "folderPath": "Graphics/Backgrounds",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "indent": 0,
                "uid": "D616B132285046412C2A52585CC2C378F6F6"
            },
            {
                "id": "gs.ZoomPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 200,
                        "y": 200
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "5DEBB0656BABA440A15A4D1890C7462637DF"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Get Winter"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 216,
                        "y": 966,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "0BDE62FA9343034EFB2BB7741583D05A39E9"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "1C8445DE5C6F66404F39D7476891E0FC81B7"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 8,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 1,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "modern city.png",
                        "folderPath": "Graphics/Backgrounds",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "indent": 0,
                "uid": "D406C3D74CCBB04180492195AE9E5CD12775"
            },
            {
                "id": "gs.ZoomPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 150,
                        "y": 150
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "DD9653AF4577154CA139E276D9C36794F54D"
            },
            {
                "id": "gs.MaskPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "mask": {
                        "type": 0,
                        "sourceType": 0,
                        "value": 0,
                        "vague": 0,
                        "ox": 0,
                        "oy": 0,
                        "graphic": {
                            "name": "Blinds_Hor.png",
                            "folderPath": "Graphics/Masks",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "video": null
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "620E401C1D1A68477E4A91B8AF7C9A9CAA69"
            },
            {
                "id": "gs.MaskPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "mask": {
                        "type": 0,
                        "sourceType": 0,
                        "value": 0,
                        "vague": 0,
                        "ox": 0,
                        "oy": 0,
                        "graphic": {
                            "name": "Blinds_V.png",
                            "folderPath": "Graphics/Masks",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "video": null
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "BCF9779C2F40A5448C785554F1B48E26C761"
            },
            {
                "id": "gs.MessageSettings",
                "params": {
                    "useCharacterColor": 0,
                    "paragraphSpacing": 0,
                    "backlog": 1,
                    "bold": 0,
                    "italic": 0,
                    "linePadding": 6,
                    "lineHeight": 0,
                    "lineSpacing": 0,
                    "smallCaps": 0,
                    "underline": 0,
                    "strikeThrough": 0,
                    "autoErase": 1,
                    "waitAtEnd": 1,
                    "font": "Verdana",
                    "size": 40,
                    "outline": 0,
                    "outlineSize": 4,
                    "shadow": 0,
                    "shadowOffsetX": 1,
                    "shadowOffsetY": 1,
                    "color": {
                        "red": 255,
                        "green": 255,
                        "blue": 255,
                        "alpha": 255
                    },
                    "outlineColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "shadowColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "fieldFlags": {
                        "autoErase": 1,
                        "waitAtEnd": 1,
                        "backlog": 1,
                        "font": 1,
                        "size": 1
                    }
                },
                "indent": 0,
                "uid": "2AF9551F8E3DC345882A7B043A49E8C9C509"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Everything seems to be moving in the direction of modernisation ......"
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1D55901A88520249AB8A45C87B5C4301399E",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "F5CC762E054225455539FD6393EC2BEC23FD"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "But who can say how the world will change under this combination of old knowledge and new exploration."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "FC7A8AC725E1F747F299F544D7BB2964C8C0",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "FDDC93BE23DA72479A6A7305BA81A753A510"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": null,
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "A2594D285105B04FEA6816F510FD3B1A0EC6"
            },
            {
                "id": "gs.ChangeTextSettings",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 1,
                    "bold": 0,
                    "italic": 0,
                    "underline": 0,
                    "smallCaps": 0,
                    "strikeThrough": 0,
                    "lineSpacing": 0,
                    "padding": [
                        6,
                        0,
                        6,
                        0
                    ],
                    "font": "Verdana",
                    "size": 80,
                    "outline": 0,
                    "shadow": 0,
                    "outlineColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "shadowColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "fieldFlags": {
                        "font": 1,
                        "size": 0
                    }
                },
                "indent": 0,
                "uid": "D40825B585605840164B249553B96670E1DA"
            },
            {
                "id": "gs.ShowText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "predefinedPositionId": 8,
                    "positionType": 0,
                    "number": 1,
                    "duration": 120,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": null,
                        "defaultText": "The End.\n"
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "positionOrigin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C31C2D3F60711640F62A2EC8A2977150139D",
                "expanded": false
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "96EB6CA99CCFF94DE04917C216F085E8E747",
                        "name": "Title Screen"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "8C7088B12A8DB24CC278A0F17D6320C1704F"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}