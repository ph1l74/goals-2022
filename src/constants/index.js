// Initial Store State
export const INIT_STATE = {
    curStep: 0,
    values: {
        disclaimer: null,
        disclaimerComment: null,
        typeOfVisit: null,
        clientName: null,
        transport: null,
        transportComment: null,
        office: null,
        startDate: null,
        endDate: null,
        date: null,
        additionalComment: null,
        guests: [{}],
        questionnaire: {
            testPositive: null,
            testedAfterTrip: null,
            returnToWork: null,
            typeOfVisitor: null,
            abroad: null,
            contactCOVID: null,
            symptoms: null,
            memberSymptoms: null,
            haveRisks: null,
            safetyMeasures: null,
            trueInformation: null,
        }
    }
};