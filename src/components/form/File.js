import { useField } from "formik";

export default function File({ label, ...props}) {

    const [field, meta, helpers] = useField(props)

    return (
        <label>
            <div>{label}</div>
            <input type="file" {...field} {...props} />
        </label>
    )
}