GS.dataCache['1487607E42025441F14B5005E3D41549BE07'] = {
    "uid": "1487607E42025441F14B5005E3D41549BE07",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "c_intergrate",
        "type": "vn.scene",
        "parentId": "3C1BC9054107654FA64A37E391F9478D6A93",
        "chapterUid": "16A37E3A56234941EE68B300CDA44F6234D0",
        "order": 1,
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "tied hand 2.png",
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
                "uid": "AF6005D54DE5764B07383281E363AAA2557D"
            },
            {
                "id": "vn.ZoomBackground",
                "params": {
                    "layer": 0,
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
                "uid": "057F8A18984F2442876A6962528F85DA39F1"
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
                "uid": "91E930C1128DB14F5479A456699FC0D75E42"
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
                        "x": 208,
                        "y": 394,
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
                "uid": "39DA38101056A6461108EB8521B20D4EB442"
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
                        "defaultText": "They had me so tied up that maybe I should try to communicate with them properly first."
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
                "uid": "7DB5C5682575A44BCF8B018701A40E5FCC2B",
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
                "uid": "CAE0A247689D324952799B29B410ACD3B35A"
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
                        "x": 1678,
                        "y": 296,
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
                "uid": "A8F3BC006FC6884D3798EF85ADBC91201B99"
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
                "uid": "D9606B0E8070544AF64A90185DDC018839CD"
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
                        "name": "friendly.png",
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
                "uid": "B3BF1F0811E53043D4086DD102FD97764990"
            },
            {
                "id": "gs.ZoomPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 400,
                        "y": 400
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "E92D649A4C2C694F5C5B5E20FEC09FBA16A8"
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
                "uid": "2E4B0C083E40334A085B4278B7ECE64ED810"
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
                        "x": 208,
                        "y": 394,
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
                "uid": "B61DC2A36D762848B67AD433038BD25E7A81"
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
                        "defaultText": "Maybe I should try to talk to them first for a while"
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
                "uid": "7685EDF85B95C348B81BFF036FA883D6F59D",
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
                        "x": 1648,
                        "y": 300,
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
                "uid": "6EC5E3A03B46A046573AF9B4D3CD86386C1C"
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
                "uid": "B852A8F74CAEF4453C994A53BC5F885B0539"
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
                "uid": "520EB5A155E7D14E2748F4837CC2CBBE672F"
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
                "uid": "643FE01F0D43314CBA1B9546C7EE8359C2C9"
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
                        "defaultText": "With some 'friendly' communication, you find their expressions soften."
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
                "uid": "81D762A421C8984FCF18FDE6B589F6E0378A",
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
                "uid": "33D4EE337ABAE84FA31A2E96EB229128FC56"
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
                "uid": "13E66427610EE249FC482F54DD673155FF87"
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
                        "defaultText": "But you find that they can't communicate in words yet."
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
                "uid": "DE5D536B3352004983987FF117003790E543",
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
                "uid": "CC538A527FC9F44FCD6BB981F16AF0A5AD2B"
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
                "uid": "E4CC62B871EF9242D46AB866E93A83FBB277"
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
                        "defaultText": "Thanks to the previous conversation that bought some time, you managed to break free of the rope."
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
                "uid": "51034532812CF74A2F2A4251CEA322902F7C",
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
                "uid": "1B1549886555C24CC21B33C486AA5418E35E"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            {
                                "lcId": null,
                                "defaultText": "Intergrate"
                            },
                            "D7B3653A7AF0D049256B55E65F29469DE64E"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "330A3A9334C238414E9B46234D93BC8773B7"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            {
                                "lcId": null,
                                "defaultText": "Become the leader"
                            },
                            "97953BC53FA8664D4C2B78615923F2877B7F"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "416EF45A695B2947572B85567EC083FBC483"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            {
                                "lcId": null,
                                "defaultText": "Run Away"
                            },
                            "D7F130D873A927491019B6A39C36E10E854C"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "3821688589FB3141EA7B6DA65761EC321236"
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
                "uid": "08028C513899F64335799F65B21187C1187C"
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