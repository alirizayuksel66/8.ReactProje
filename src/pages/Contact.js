import { Formik, Form, Field } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";

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
                    <Form>
                        <Input label="Ad-Soyad" name="name" /><br/>
                        <Field component="textarea" name="about" /> <br />
                        <label>
                            <Field type="checkbox" name="accept" />
                            Kuralları Kabul Ediyorum ! 
                        </label><br/>
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
                        <Field type="file" name="avatar" />
                        <button type="submit" disabled={!values.accept}>Gönder</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}