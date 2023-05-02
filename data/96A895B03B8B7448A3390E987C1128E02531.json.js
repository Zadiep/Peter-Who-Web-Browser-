GS.dataCache['96A895B03B8B7448A3390E987C1128E02531'] = {
    "uid": "96A895B03B8B7448A3390E987C1128E02531",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Who I am",
        "type": "vn.scene",
        "parentId": "16A37E3A56234941EE68B300CDA44F6234D0",
        "chapterUid": "16A37E3A56234941EE68B300CDA44F6234D0",
        "order": 0,
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "forest.png",
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
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ZoomBackground",
                "params": {
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 140,
                        "y": 140
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "B7E997304225E3429F58C684FA89515D9EC3"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "3FC2C70568A4984D389A6A69669295952B9D",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "4A4A37E483C4E44C508AD6B5A8F5B62717E8"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "F5CE8CD238536545419A13B425025C65C880",
                    "characterId": "E034253C1EA06741CB2B55F3720CA8C8BCB4",
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 240,
                        "y": 384,
                        "angle": -1,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "indent": 0,
                "uid": "5D5CA70B275D464E2D3BC3C8CB886DE29978"
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
                        "defaultText": "What do I do next?"
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
                "uid": "86D084752C7703412808C1B4D1E7F2A7BEDD",
                "expanded": true
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "E034253C1EA06741CB2B55F3720CA8C8BCB4",
                    "predefinedPositionId": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1770,
                        "y": 386,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
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
                "uid": "244BE183270B954E721BC9131CBF3CDB7C90"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E034253C1EA06741CB2B55F3720CA8C8BCB4",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
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
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "F2F0CB8E7898B241A36BC5C1E3ABDC8B4A18"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "EA06470D8140964F0749A8D76577A39B05E1",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "DC2982F74562E34D908ABBF19BC3D8F06AF5"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            {
                                "lcId": null,
                                "defaultText": "Stay"
                            },
                            "6E2422B91B528942F9389431CCC6A55E333D"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "DAEA3E7C252F7746E55B0853AD867FC3F2AC"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            {
                                "lcId": null,
                                "defaultText": "Travel"
                            },
                            "83350BF43B5BB14A555B6D78344FF38B4F1C"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "256CFA668FFA6642032BBCF8CBED57980632"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "87C691AD6DF5C84BCF1A8CC5E61FDD36119E",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "CDEAA21886418347C30901E82C5E3E08B6C9"
            }
        ],
        "livePreviewDisabled": false,
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "localizableStrings": {}
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