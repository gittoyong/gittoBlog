/**
 * 기본적으로 루트 URL / 에 해당되는 페이지
 */
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Gitto Blog !
      </h1>
      <p className="mb-4">
        Hello, My name is Gitto. I hope that you will gain useful information or knowledge from this. 
        <br/>
        <br/>
        Enjoy Gitto Blog. ˆˆ
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
