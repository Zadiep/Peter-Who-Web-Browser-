GS.dataCache['3305C56CKBF5BA44BFS8614EE4B277E49F6A'] = {
    "uid": "3305C56CKBF5BA44BFS8614EE4B277E49F6A",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Wake up",
        "type": "vn.scene",
        "parentId": "49DC3EE6267197419859C9E4D23776294B50",
        "chapterUid": "49DC3EE6267197419859C9E4D23776294B50",
        "order": 0,
        "commands": [
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Audio/Music",
                        "name": "639468__timouse__piano-loop-8.wav",
                        "volume": "47",
                        "playbackRate": 100
                    },
                    "fadeInDuration": 30,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 0,
                        "music.playbackRate": 1,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "FF47A50988ABD54B448B17C6538C3C441B27"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "nighsky.png",
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
                        "easing.type": 0,
                        "animation.type": 0,
                        "origin": 0,
                        "zOrder": 1,
                        "blendMode": 0,
                        "viewport.type": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "562992E02D5ED7424C6A5A18DFFC23B91D20",
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
                "uid": "163CA65806D579499258FCC871822F8F4FDA"
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
                        "blue": 6,
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
                        "size": 1,
                        "color": 0,
                        "useCharacterColor": 1,
                        "bold": 1,
                        "italic": 1,
                        "smallCaps": 1,
                        "underline": 1,
                        "strikeThrough": 1,
                        "lineAlignment": 1,
                        "lineHeight": 1,
                        "lineSpacing": 1,
                        "linePadding": 1,
                        "paragraphSpacing": 1,
                        "outline": 1,
                        "outlineColor": 1,
                        "outlineSize": 1,
                        "shadow": 1,
                        "shadowColor": 1,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "FC35379C8AAB424E765A7845AB3B3C024B49",
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
                        "defaultText": "[p.s. Click to operate, if valid, click 'control' key to skip.]"
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
                "uid": "DBC526D53F118845C45940148AB50D886951",
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
                        "defaultText": "[Now, Game begin.]"
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
                "uid": "B9C55DFA40E735424B8857B647C47D1F1F5D",
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
                        "defaultText": "[Welcome!]"
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
                "uid": "31A451F60B929440564B8848722EEF19881F",
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
                "uid": "057C89B359983247132896F7C1B5F121BB38"
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
                "uid": "14CF40EA5730994ED6393459B9D3DB19F9D1"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
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
                        "defaultText": "……"
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
                "uid": "0FCE5B697CC4B2439D29E2688AA061BDBC99",
                "expanded": true
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
                "uid": "CABB6A898FD1A24EB379458045579CCC6AA1"
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
                        "x": 248,
                        "y": 406,
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
                "uid": "10FF8BA14A75E14D42581918A91C48B9DB6C"
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
                        "lcId": "655FF70616B7E74DCF992D89F239835F710F",
                        "defaultText": "Where am I?"
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
                "uid": "C08B870E617AC84E106AAF24AC070212EF02",
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
                        "defaultText": "My head so hurts!"
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
                "uid": "BA9F55E16BEE354BAD087946FB04D25C263B",
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
                "uid": "E3B846CA0E71E64D383BFEB56084C3233031"
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
                        "x": 1524,
                        "y": 334,
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
                "uid": "204DC61D741C854EB33B827441A3FA1A8B58"
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
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "F279283E1E425742FC8A88D3CBCB6A47E266"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            {
                                "lcId": null,
                                "defaultText": "Explore surroundings"
                            },
                            "82DEE6988FB2F645672950D1B65402BFC86E"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "9BCBDE4D6E8BD147483928C88207A53C1759"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            {
                                "lcId": "8D187CA42F797840C25BBCF0D3D7F902D7B4",
                                "defaultText": "Look at myself"
                            },
                            "1BA9BE1D206CD1449A29FDF5D8CD07CC352D"
                        ],
                        "uid": "0F7F6E655C1FF74EDC2BC5A10253F989B2CC"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "0AF512538298A84C037BA1934319945B0662"
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
                "uid": "CABD1FAE7E2ED8464B89119547FC71DF0BBB"
            }
        ],
        "background": {
            "graphic": {
                "name": ""
            },
            "offsetX": 0,
            "offsetY": 0
        },
        "localizableStrings": {
            "DBB957FE52044745F269B395E4709EE8C84B": {
                "t": "Say, how old are you actually?",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "1A565DEF5933414CEE99AD65DD11531C6EFD"
                }
            },
            "ECE078B305C1E64F5A4B3C3660A2CB967FA5": {
                "t": "\nCool! Hi {GT:Input Text Result}! ",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "CEE4B6242CB8324CC829F973355204045F89"
                }
            },
            "C7A1710B30113847C71B9CD3D11AA8BBB324": {
                "t": "\nOh, {GN:Input Number Result}!",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "88CE0A9150CAB4493F6B4EF702D62ABC8CC7"
                }
            },
            "7B201F506F97264CAE9BF906E28010AED3C5": {
                "t": "What are you doing here?",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "B8073F0832B2E44FC0887CF844141820E724"
                }
            },
            "BD1B89B473950449F56B78B10836EB72D6E3": {
                "t": "The End",
                "d": {
                    "eid": "767F9E026DD5654DBE2A6EA7E49FD9847075"
                }
            },
            "655FF70616B7E74DCF992D89F239835F710F": {
                "t": "Hey! Who are you? ",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "C08B870E617AC84E106AAF24AC070212EF02"
                }
            },
            "CB5D789D3054634A6F591C2812619B7EEACF": {
                "t": "Just looking around",
                "d": {
                    "eid": "825DE8D848A21549980BE0A5BB828CFBC6F9"
                }
            },
            "8D187CA42F797840C25BBCF0D3D7F902D7B4": {
                "t": "I am waiting for someone",
                "d": {
                    "eid": "0F7F6E655C1FF74EDC2BC5A10253F989B2CC"
                }
            }
        },
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            },
            {
                "name": "",
                "index": 1,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "",
                "index": 2,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            }
        ],
        "booleanVariables": [
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
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "livePreviewDisabled": false
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