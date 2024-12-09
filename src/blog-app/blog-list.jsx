import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    handleDeleteBlog,
    handleInputChange,
    setBlogListOnInitialLoad,
    setCurrentEditedBlogId,
} from "../store/slices/blogSlice";

function BlogList() {
    const dispatch = useDispatch();
    const { blog } = useSelector((state) => state);
    const { blogList } = blog;

    useEffect(() => {
        dispatch(
            setBlogListOnInitialLoad({
                blogList: JSON.parse(localStorage.getItem("blogList")) || [],
            })
        );
    }, [dispatch]);

    function onDeleteBlog(getCurrentBlogId) {
        dispatch(
            handleDeleteBlog({
                currentBlogId: getCurrentBlogId,
            })
        );
    }

    function onEditBlog(getCurrentBlog) {
        dispatch(
            setCurrentEditedBlogId({
                currentBlogId: getCurrentBlog?.id,
            })
        );

        dispatch(
            handleInputChange({
                title: getCurrentBlog?.title,
                description: getCurrentBlog?.description,
            })
        );
    }

    return (
        <div style={styles.container}>
            {blogList?.length > 0 ? (
                blogList.map((singleBlogItem) => (
                    <div style={styles.card} key={singleBlogItem?.id}>
                        <h3 style={styles.title}>{singleBlogItem?.title}</h3>
                        <p style={styles.description}>
                            {singleBlogItem?.description}
                        </p>
                        <div style={styles.buttonContainer}>
                            <button
                                style={styles.editButton}
                                onClick={() => onEditBlog(singleBlogItem)}
                            >
                                Edit Blog
                            </button>
                            <button
                                style={styles.deleteButton}
                                onClick={() => onDeleteBlog(singleBlogItem.id)}
                            >
                                Delete Blog
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <h1 style={styles.noBlogsMessage}>
                    No blogs added! Please add one.
                </h1>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
    },
    card: {
        width: "300px",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        textAlign: "center",
    },
    title: {
        fontSize: "1.5rem",
        margin: "10px 0",
        color: "#333",
    },
    description: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "20px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
    },
    editButton: {
        backgroundColor: "#6200ea",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "8px 15px",
        cursor: "pointer",
    },
    deleteButton: {
        backgroundColor: "#e53935",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "8px 15px",
        cursor: "pointer",
    },
    noBlogsMessage: {
        fontSize: "1.5rem",
        color: "#666",
        textAlign: "center",
    },
};

export default BlogList;
