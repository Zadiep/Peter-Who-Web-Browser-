GS.dataCache['82DEE6988FB2F645672950D1B65402BFC86E'] = {
    "uid": "82DEE6988FB2F645672950D1B65402BFC86E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Surroudings",
        "type": "vn.scene",
        "parentId": "3305C56CKBF5BA44BFS8614EE4B277E49F6A",
        "chapterUid": "49DC3EE6267197419859C9E4D23776294B50",
        "order": 0,
        "localizableStrings": {
            "71F76B06856A1542774A19E4396355148B03": {
                "t": "The park is so beautiful right?",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "FC3DE2EC866E3742155B6751DE1F91B489D8"
                }
            }
        },
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "rivers.png",
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
                "uid": "F15E6975739827418E7927619949A1327B3A",
                "expanded": false
            },
            {
                "id": "vn.ZoomBackground",
                "params": {
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 120,
                        "y": 120
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "C1D49BBD2930C94DC3281506A8AD37CF37BB"
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
                "uid": "B84A657845D4C246C73B92D05C06A260B406"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "780B4F750601A74B1D589AB1B6673603E1F8",
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
                        "x": 242,
                        "y": 356,
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
                "uid": "2A1AE85F7A1C574458987C197CDE15220775"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 6,
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
                        "lcId": "71F76B06856A1542774A19E4396355148B03",
                        "defaultText": " So weird....It doesn't look like the world I used to know."
                    },
                    "position": 0,
                    "characterId": "E034253C1EA06741CB2B55F3720CA8C8BCB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "expanded": true,
                "uid": "FC3DE2EC866E3742155B6751DE1F91B489D8"
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
                        "defaultText": "Should I explore the surroundings?"
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
                "uid": "877F4D714ADF014C86183A4854E34E02B6AC",
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
                "uid": "ADC17023746791406E5A59C23088F8B4335B"
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
                "uid": "032D7E002BAFA94E5B0B6EC36B3FAD07C043"
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
                "uid": "C63C68BE291988490D496C32308CEC30BE9A"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 3,
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
                        "scene": {
                            "uid": "BEDF3D8C05A2814FDA49279533CA3D626F0D",
                            "name": "Tree"
                        }
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Tree"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 108,
                        "y": 226,
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
                "uid": "2435BF2022CC0142C8685C1399EFE2BEFB42"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 3,
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
                        "scene": {
                            "uid": "269699B7784C354F3048B543BCFD4D48A753",
                            "name": "River"
                        }
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "River"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 886,
                        "y": 924,
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
                "uid": "095F24041D9FD94BB66BF0F25033194C9217"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "FBDD0AC56ED1B04D427BBCB7E5398545B42D"
            }
        ],
        "livePreviewDisabled": false,
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "booleanVariables": [
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