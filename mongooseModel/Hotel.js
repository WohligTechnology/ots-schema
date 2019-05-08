var schema = new Schema({
    BasicData: {
        Accomodation: {
            Code: {
                type: String
            },
            Name: {
                type: String
            }
        }
    },
    SellingData: {
        Rooms: {
            Room: [
                {
                    RatePlans: {
                        RatePlan: [
                            {
                                Boards: {
                                    Board: {
                                        Rates: [
                                            {
                                                Rate: [
                                                    {
                                                        RateTag: {
                                                            OfferApplied: {
                                                                type: String
                                                            }
                                                        },
                                                        Amount: {
                                                            type: Number
                                                        },
                                                        Adults: {
                                                            type: Number
                                                        },
                                                        Children: {
                                                            type: Number
                                                        },
                                                        ApplyType: {
                                                            type: String
                                                        },
                                                        ApplyCycle: {
                                                            type: String
                                                        },
                                                        StartDate: {
                                                            type: Date
                                                        },
                                                        EndDate: {
                                                            type: Date
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                Code: {
                                    type: String
                                },
                                Description: {
                                    type: String
                                }
                            }
                        ]
                    },
                    Code: {
                        type: String
                    },
                    Name: {
                        type: String
                    }
                }
            ]
        }
    },
    AvailabilityData: {
        Rooms: {
            Room: [
                {
                    Categories: {
                        Category: [
                            {
                                Type: {
                                    type: String
                                }
                            }
                        ]
                    },
                    Code: {
                        type: String
                    }
                }
            ]
        }
    }
})
export default mongoose.model("Hotel", schema)
