GS.dataCache['4D33D5B28E6D33429E49A905F7E47AE8E87A'] = {
    "uid": "4D33D5B28E6D33429E49A905F7E47AE8E87A",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "dead",
        "type": "vn.scene",
        "parentId": "D0E25D70727F1447F5196F328791B25FA158",
        "chapterUid": "D0E25D70727F1447F5196F328791B25FA158",
        "order": 0,
        "localizableStrings": {},
        "commands": [
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
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C91989FB4B70B741AE2BAE8251C2615E67FC"
            },
            {
                "id": "vn.ZoomBackground",
                "params": {
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 1,
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
                "uid": "B71113535D639248DC586BC34A82ECC59670"
            },
            {
                "id": "vn.MaskBackground",
                "params": {
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
                            "name": "Splotches.png",
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
                    },
                    "layer": 0
                },
                "indent": 0,
                "uid": "3B7458855D02634FD11B40739D22145C7075"
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
                        "size": 0,
                        "color": 1,
                        "bold": 1,
                        "italic": 1,
                        "smallCaps": 1,
                        "underline": 1,
                        "strikeThrough": 1,
                        "lineSpacing": 1,
                        "outline": 1,
                        "outlineColor": 1,
                        "outlineSize": 1,
                        "shadow": 1,
                        "shadowColor": 1,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "padding.0": 1,
                        "padding.1": 1,
                        "padding.2": 1,
                        "padding.3": 1
                    }
                },
                "indent": 0,
                "uid": "B540D4C78E2D0746BE5938524488109D2987",
                "expanded": false
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
                        "defaultText": "Unfortunately, you are beaten to death.\n"
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
                "uid": "6DCC476C5F2AA74869698CA5D2637450B161",
                "expanded": false
            },
            {
                "id": "gs.EraseText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 1,
                    "duration": 0,
                    "waitForCompletion": 1,
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
                "uid": "4843EC8C1B0FC441C28AFA585AF40A0C2B14"
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
                "uid": "B6C16DC58F908241EF2AB7B22182F4A22EB3"
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