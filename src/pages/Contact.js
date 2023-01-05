import { Formik, Form, Field } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";

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
                    skills: ['php', 'css']
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
                        <Field component="select" name="gender">
                            <option value={1}>Kadın</option>
                            <option value={2}>Erkek</option>
                        </Field><br/>
                        <Field component="select" name="skills" multiple={true}>
                            <option value="php">PHP</option>
                            <option value="css">CSS</option>
                            <option value="js">JavaScript</option>
                            <option value="html">HTML</option>
                        </Field><br/>
                        <File label="Avatar" name="avatar" />
                        <button type="submit" disabled={!values.accept}>Gönder</button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}

            </Formik>
        </div>
    )
}