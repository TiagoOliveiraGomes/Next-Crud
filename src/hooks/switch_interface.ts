import { useState } from "react";

export default function switch_interface () {
    const [visible, setVisible] = useState<"table" | "form">("table")

    const setTable = () => setVisible("table")
    const setForm = () => setVisible("form")
    return {
        visible_form: visible === "form",
        visible_table: visible === "table",
        setTable,
        setForm,
    }
}