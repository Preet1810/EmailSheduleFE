import * as Yup from "yup";

export const validationSchemaAddEditShedule = Yup.object({
    title: Yup.string().required("Title is required").min(3, "Title must be atleast 3 characters long"),
    description: Yup.string().required("Description is required").min(3, "Description must be atleast 3 characters long"),
    subject: Yup.string().required("Subject is required").min(3, "Subject must be atleast 3 characters long"),
});