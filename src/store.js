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
            title: "friendly invitation",
            text: "hello guys, i am iron-man, your best friend, please hangout with me at facebook live",
        },
        {
            _id: "2",
            title: "Facebook's take on Global warming",
            text: "'Global warming' is a phrase that refers to the effect on the climate of human activities, in particular the burning of fossil fuels (coal, oil and gas) and large-scale deforestation, which cause emissions to the atmosphere of large amounts of 'greenhouse gases', of which the most important is carbon dioxide. Such gases absorb infrared radiation emitted by the Earth's surface and act as blankets over the surface keeping it warmer than it would otherwise be. Associated with this warming are changes of climate. The basic science of the 'greenhouse effect' that leads to the warming is well understood. More detailed understanding relies on numerical models of the climate that integrate the basic dynamical and physical equations describing the complete",
        },
    ],
    tokenData: {
        person: ["aditya", "abhishek", "rahul", 'vivek', 'john', 'neon', 'human'],
        org: ["facebook", 'instagram', 'apple', 'meta', 'greenhouse'],
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
        set((state) => {
            const target = state.selectedRecord;
            target.text = target.text.slice(0, index) + target.text.slice(index+word.length);

            return {
                records: [...state.records.filter((el) => el._id !== target._id), target]
            }
        })
    }
}));

export default useStore;
