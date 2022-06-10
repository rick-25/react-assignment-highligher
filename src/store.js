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
            title: "title",
            text: "hello guys, i am aditya, your best friend, please hangout with me at facebook live",
        },
        {
            _id: "2",
            title: "Record 2",
            text: "Hello this, is a test pelase clap",
        },
    ],
    tokenData: {
        person: ["aditya", "friend", "Hello"],
        org: ["facebook"],
    },

    selectedRecord: {
        _id: "1",
        title: "title",
        text: "hello guys, i am aditya, your best friend, please hangout with me at facebook live",
    },

    setSelectedRecord:  (_id) => {
        set((state) => ({
            selectedRecord: state.records.find((record) => record._id === _id)
        }));
    },


    removeAnotation: (index, word) => {
        
    }
}));

export default useStore;
