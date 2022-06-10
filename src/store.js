import create from "zustand";

const useStore = create((set) => ({

    isPersonHighlighed: false,
    tooglePersonHighlight: () => {
        set((state) => ({isPersonHighlighed: !state.isPersonHighlighed}))
    },

    isOrgHighlighed: false,
    toogleOrgHighlight: () => {
        set((state) => ({isOrgHighlighed: !state.isOrgHighlighed}))
    },

    records: [
        {
            _id: "1",
            title: "title",
            text: "hello guys, i am aditya, your best friend, please hangout with me at facebook live",
        },
    ],
    tokenData: {
        person: ["aditya", "friend"],
        org: ["facebook"],
    },

    selectedRecord: {
        _id: "1",
        title: "title",
        text: "hello guys, i am aditya, your best friend, please hangout with me at facebook live",
    },



}));

export default useStore;
