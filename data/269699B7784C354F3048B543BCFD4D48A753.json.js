GS.dataCache['269699B7784C354F3048B543BCFD4D48A753'] = {
    "uid": "269699B7784C354F3048B543BCFD4D48A753",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "River",
        "type": "vn.scene",
        "parentId": "82DEE6988FB2F645672950D1B65402BFC86E",
        "chapterUid": "49DC3EE6267197419859C9E4D23776294B50",
        "order": 1,
        "localizableStrings": {},
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "face in river.png",
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
                "indent": 0
            },
            {
                "id": "vn.ZoomBackground",
                "params": {
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 200,
                        "y": 210
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "F18BA41028778446EF1BA2E870ABD2C81E8D"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": null,
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
                        "x": 166,
                        "y": 368,
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
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "indent": 0,
                "uid": "71C50BB46343964D142B4E63D563F1996193"
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
                "uid": "F5D6D10436084740914B8764F5DA953DB3D9"
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
                        "defaultText": "Gosh ...... I look so haggard."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BA5442D530D7844087487C3259B8D8328769",
                "expanded": true
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
                        "defaultText": "But I still can't remember who I am."
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
                "uid": "3C28DCEE1811A5400E3A1D9734C4ACFC6C4E",
                "expanded": true
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
                "uid": "83FA05E58660154EAC795783D25C10874CC4"
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
                "uid": "A422FA5817E6D3478B2950C9A2A219A86AE7"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E034253C1EA06741CB2B55F3720CA8C8BCB4",
                    "duration": 60,
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
                "uid": "B87B70931960E54E8C6BF5081E755D67896C"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "96A895B03B8B7448A3390E987C1128E02531",
                        "name": "Who I am"
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
                "uid": "676E14712A617845EA9B7550117D4BDE20E8"
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
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
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