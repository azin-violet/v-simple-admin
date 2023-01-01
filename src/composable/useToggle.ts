import { useAppStore } from "@/store/app";

export function useToggle () {
    const appStore = useAppStore()

    function toggleCollapse() {
        appStore.setCollapse(!appStore.getCollapse)
    }

    return {
        toggleCollapse
    }
}