import loader from '../../../assets/loader.png'
import PropTypes from 'prop-types'
import { useUsernameStore } from '../../../store/counterStore';

const Posts = (props) => {
  console.log(useUsernameStore.getState())
  let contador = 0;
  // eslint-disable-next-line react/prop-types
  const {posts, username} = props;
  if(posts[0] === 'promise'){
  return (
      <div className='justify-center text-center'>
      <img className='m-auto animate-spin animate-infinite animate-ease-in-out' src={loader} alt="" />
		</div>
  )} else {
    return (
      <div className='justify-center text-center'>
        {posts.map((post) => {
          contador += 1;
          return (
            <div key={contador}>
              <div className="max-w-sm my-1 w-full lg:max-w-full lg:flex justify-center">
                <div className="w-96 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-700 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">@{username}</div>
                    <p className="text-gray-700 text-base">{post.content}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

export default Posts
