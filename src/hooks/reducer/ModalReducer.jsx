export const ModalReducer = (modalState, modalAction) => {
    switch(modalAction.type){
        case "MODAL_OPEN":
            return {...modalState, modalStatus:true, video: modalAction.payload }
        case "MODAL_CLOSE":
            return {...modalState, modalStatus: false, video:{}}
        default:
            return modalState;
    }
}