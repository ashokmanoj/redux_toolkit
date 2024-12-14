import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    handleAddTodo,
    handleEditBlog,
    handleInputChange,
    setCurrentEditedBlogId,
} from "../store/slices/blogSlice";

function AddNewBlog() {
    const { blog } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { currentEditedBlogId } = blog;

    function onChangeInput(event) {
        dispatch(
            handleInputChange({
                [event.target.name]: event.target.value,
            })
        );
    }

    function handleTodoSubmit(event) {
        event.preventDefault();

        if (currentEditedBlogId !== null) {
            dispatch(handleEditBlog());
            toast.success("Blog updated successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                type: "success",

            });
        } else {
            dispatch(handleAddTodo());
            toast.success("New blog added successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                type: "success",
            });
        }

        // Reset the form
        if (currentEditedBlogId !== null) {
            dispatch(
                setCurrentEditedBlogId({
                    currentBlogId: null,
                })
            );
        }
        dispatch(
            handleInputChange({
                description: "",
                title: "",
            })
        );
    }

    return (
        <div style={styles.container}>
            <form onSubmit={handleTodoSubmit} style={styles.form}>
                <h2 style={styles.header}>
                    {blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
                </h2>
                <div style={styles.formGroup}>
                    <label htmlFor="title" style={styles.label}>
                        Blog Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Blog Title"
                        id="title"
                        onChange={onChangeInput}
                        value={blog?.formData?.title}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="description" style={styles.label}>
                        Blog Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter Blog Description"
                        id="description"
                        onChange={onChangeInput}
                        value={blog?.formData?.description}
                        style={styles.textarea}
                    />
                </div>
                <button type="submit" style={styles.button}>
                    {blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    header: {
        fontSize: "1.8rem",
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
    },
    label: {
        fontSize: "1rem",
        color: "#555",
    },
    input: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "1rem",
        outline: "none",
        transition: "border-color 0.3s",
    },
    textarea: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "1rem",
        outline: "none",
        minHeight: "80px",
        resize: "vertical",
        transition: "border-color 0.3s",
    },
    button: {
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#6200ea",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#5a00d2",
    },
};

export default AddNewBlog;
