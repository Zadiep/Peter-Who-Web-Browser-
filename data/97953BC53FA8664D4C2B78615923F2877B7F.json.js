GS.dataCache['97953BC53FA8664D4C2B78615923F2877B7F'] = {
    "uid": "97953BC53FA8664D4C2B78615923F2877B7F",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "leader",
        "type": "vn.scene",
        "parentId": "E8D7BF2C271CE2418298DE39D1C87CADDE0A",
        "chapterUid": "D0E25D70727F1447F5196F328791B25FA158",
        "order": 2,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Audio/Music",
                        "name": "639464__timouse__piano-loop-5.wav",
                        "volume": 100,
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
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C4FBFB7C89141740297A67545FCE730DAA7F"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "leader.png",
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
                "uid": "927A4C6A1076A8475A6A7701C9E10C52AFC6"
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
                "uid": "773B3B293F04744C671B78516F22F7AEEE46"
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
                "uid": "D123615929D5E84DFA2981D2C6B51A1E661B"
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
                        "defaultText": "After showing your survival prowess..."
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
                "uid": "AF9158E23607E74BB91ACBD88B313572653A",
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
                "uid": "A50D1551338FE243AD598407F08CB27C541E"
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
                "uid": "C16C47831E4CE442446BFF047BA925AB71E0"
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
                        "defaultText": "You persuaded them to follow the history you remembered."
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
                "uid": "FDF4562E5984E54D3459E954E6A38408F47C",
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
                "uid": "41275A136CE32247988AC0744097685EE1D0"
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
                "uid": "2B263D50600C514B7768D7634DFF78B73989"
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
                "uid": "A31249D6243A054BF94A4273DCD7E3CA7EA0"
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
                "uid": "681F8C1D478F5249F63B25B0EDC0CDC03F3B"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "044F7A3F513C7342304B73973947619532B4"
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
                "uid": "5CDAB13F5446974C8F4B7144D67B49D4B1EB"
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
                "uid": "0F051C6622BC524E0F09DAC32093181CA271"
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
                "uid": "3132DE403503A649270A9531E5DAE1D20AA1"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "D7C172983F079042883B7731474E227435B6"
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
                "uid": "29FAE7B835F8B1484E5B8542BC7F257572FD"
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
                "uid": "E589E5E017D482457478DB2150C66867DFDF"
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
                "uid": "FC44FE84167789453D2962254D193AF41485"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "AB5ECACB74E32342FB08FCF8FD99CC977092"
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
                "uid": "8C9E7A9433DBF74BF67A02D017A62983F642"
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
                "uid": "4650E7FE1243E549981898038A5E9D4D50EC"
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
                "uid": "7988C9E157B5C34E974B0858E6FF37568CA7"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "B83F2E2D8B823548717AEEA4DC8ED61A8AE9"
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
                "uid": "EC73D1A3307B624AE54BCB6414660A878752"
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
                "uid": "A5F0A6D930B8D447B83BD337E978FBBBF323"
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
                "uid": "524710C65FF9464DF43B9E7461644A2789A2"
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
                        "defaultText": "With the history in your head as a reference, society is evolving at a very fast pace."
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
                "uid": "159407745C9514488A8B74F0B1D41110195A",
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
                "uid": "3883C21D096661477D2AFDB73E4B69129C68"
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
                "uid": "0BD30CB4588F5145E80BEC644CA14D95D929"
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
                        "defaultText": "Everything is moving in a modern direction..."
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
                "uid": "639B255B70558442FB79AF8193ECBA030641",
                "expanded": true
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
                "uid": "D52661B17E33B54C7768DB810645A76256B0"
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
                "uid": "079E992F0597184CBD7A5277B375F792AB36"
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
                "uid": "5FE54C2E53597840BA3BE531440B17FE5481"
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
                        "defaultText": "Finally, you made the same society in you mind."
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
                "uid": "7317E3503A2C814B489AD296F96A174AF9D1",
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
                "uid": "A9C2B91A9705D24B1A7885253238F277C01D"
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
                "uid": "745F88CC957768429569A4562DB3861D7F26"
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
                "uid": "D8EEC73045E6C840EE8A7EC48059295E6CDC"
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
                        "defaultText": "The End"
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
                "uid": "B8E72A0F7B03A84CA68BB3015F2535BCF78D",
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
                "uid": "D4D5E0CF769C0345755A37A2E0058BBCED02"
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