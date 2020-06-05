import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../../components/common/FormsControls/FormsControls';
import { Field, reduxForm } from 'redux-form'

const MyPosts = React.memo(props => {
  let postsElements = props.posts.map(p => <Post message={p.message} countLikes={p.countLikes}/>)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (

    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
})

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="Enter your post"
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;