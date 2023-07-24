import React from 'react';
import classes from './myPosts.module.css'
import Post from './post/Posts';
import { Formik } from 'formik';
// import * as Yup from 'yup';


const MyPosts = (props) => {
    let postElements = [...props.ProfilePage.Posts].reverse().map(p => <Post key={p.id} post={p.message} id={p.id} />)
    let addPost = (text) => {
        props.addNewPost(text)


    }
    // const DisplayingErrorMessagesSchema = Yup.object().shape({
    //     newPostText: Yup.string()
    //         .max(50, 'Too Long!')

    // });

    return (
        <div className={classes.posts}>
            {postElements}
            {/* <input type="text" onChange={onPostChange} value={props.newPostText} />
            <button onClick={addPost}>Add Post</button> */}

            <Formik Formik
                initialValues={{ newPostText: '', }}
                onChange={() => {
                    return (
                        console.log('aosidj'))
                }}
                onSubmit={(values, { setSubmitting },) => {
                    return (
                        addPost(values.newPostText),
                        values.newPostText = '',
                        setSubmitting(false)

                    )
                }}
            >
                {({

                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}
                    >
                        <input
                            onChange={handleChange}
                            type="text"
                            name="newPostText"
                            onBlur={handleBlur}
                            value={values.newPostText}
                        />
                        {errors.newPostText && touched.newPostText && errors.newPostText}

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>




        </div>
    )
}
export default MyPosts