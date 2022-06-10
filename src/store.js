import create from "zustand";

const useStore = create((set) => ({
    isPersonHighlighed: false,
    tooglePersonHighlight: () => {
        set((state) => ({ isPersonHighlighed: !state.isPersonHighlighed }));
    },

    isOrgHighlighed: false,
    toogleOrgHighlight: () => {
        set((state) => ({ isOrgHighlighed: !state.isOrgHighlighed }));
    },

    records: [
        {
            _id: "1",
            title: "1. Lorem ipsum dolor",
            text: "Elinor lee, a gangster's moll living in the Harlem section of New york City, has signed up-and-coming boxer Benny Blue to a 10-year contract. Lee and a pair of corrupt fight promoter scheeme to build up Blue as a potential champoin, with the goal of betting against him  when they force him to take a dive in a champion fight.",
        },
        {
            _id: "2",
            title: "2. Facebook's take on Global warming",
            text: "'Global warming' is a phrase that refers to the effect on the climate of human activities, in particular the burning of fossil fuels (coal, oil and gas) and large-scale deforestation, which cause emissions to the atmosphere of large amounts of 'greenhouse gases', of which the most important is carbon dioxide. Such gases absorb infrared radiation emitted by the Earth's surface and act as blankets over the surface keeping it warmer than it would otherwise be. Associated with this warmcing are changes of climate. The basic science of the 'greenhouse effect' that leads to the warming is well understood. More detailed understanding relies on numerical models of the climate that integrate the basic dynamical and physical equations describing the complete",
        },
    ],
    tokenData: {
        person: [
            "aditya",
            "abhishek",
            "rahul",
            "vivek",
            "john",
            "neon",
            "human",
            "Elinor Lee",
            "Benny Blue",
            "Lee",
            "Blue",
            "Fredi",
        ],
        org: [
            "facebook",
            "instagram",
            "apple",
            "meta",
            "greenhouse",
            "New York City",
        ],
    },

    selectedRecord: {
        _id: "1",
        title: "1. Lorem ipsum dolor",
        text: "Elinor lee, a gangster's moll living in the Harlem section of New york City, has signed up-and-coming boxer Benny Blue to a 10-year contract. Lee and a pair of corrupt fight promoter scheeme to build up Blue as a potential champoin, with the goal of betting against him  when they force him to take a dive in a champion fight.",
    },

    setSelectedRecord: (_id) => {
        set((state) => ({
            selectedRecord: state.records.find((record) => record._id === _id),
        }));
    },

    removeAnotation: (index, word) => {
        set((state) => {
            const target = state.selectedRecord;
            target.text =
                target.text.slice(0, index) +
                target.text.slice(index + word.length);

            return {
                records: [
                    ...state.records.filter((el) => el._id !== target._id),
                    target,
                ],
            };
        });
    },
}));

export default useStore;
