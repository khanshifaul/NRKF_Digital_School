import { ref } from "vue";

export default function useDropZone() {
    const dragActive = ref(false);
    const droppedFile = ref(null);
    const embedFile = ref(null);

    const toggle_active = () => {
        if (droppedFile.value == null) {
            dragActive.value = !dragActive.value;
        }
    };

    const drop = (event) => {
        droppedFile.value = event.dataTransfer.files[0];
    };

    const selectedFile = (event) => {
        droppedFile.value = event.target.files[0];
        dragActive.value = true;
        embedFile.value = URL.createObjectURL(event.target.files[0]);
    };

    const clearDropped = () => {
        droppedFile.value = null;
        dragActive.value = false;
    };

    return {
        dragActive,
        droppedFile,
        embedFile,
        toggle_active,
        drop,
        selectedFile,
        clearDropped,
    }
}