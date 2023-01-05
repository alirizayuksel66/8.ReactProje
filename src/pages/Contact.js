import { Formik, Form, Field } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import Radio from "../components/form/Radio";

export default function Contact() {
    return (
        <div>
            <h3>İletişim</h3>
            <Formik
                initialValues={{
                    name: 'Ali Rıza',
                    about: '',
                    accept: false,
                    gender: 1,
                    avatar: '',
                    skills: ['php', 'css'],
                    level: 'sr'
                }}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {({ values }) => (
                    <Form className="p-6">
                        <Input label="Ad-Soyad" name="name" /><br/>
                        <Textarea label="Hakkında" name="about" /> <br />
                        <Checkbox label="Kuralları Kabul Ediyorum" name="accept" />
                        <Select label="Cinsiyet" name="gender" options={[
                            { key: 1, value: 'Kadın'},
                            { key: 2, value: 'Erkek'}
                        ]} /><br/>
                        <File label="Avatar" name="avatar" /><br></br>
                        <Radio label="Seviyenizi Seçin" name="level" options={[
                            {key: 'jr', value: 'Jr. Developer'},
                            {key: 'sr', value: 'Sr. Developer'},
                            {key: 'ninja', value: 'Ninja'}
                        ]} />
                        <button type="submit" disabled={!values.accept}>Gönder</button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}

            </Formik>
        </div>
    )
}