import useFetch from './useFetch'

interface IPosts {
    userId: number
    id: number
    title: string
    body: string
}


const Posts = () => {
    const url: string = 'https://jsonplaceholder.typicode.com/posts'
    const {data, loading, error} = useFetch(url)

    const covertedData: IPosts[] = data as IPosts[]


    return (
        <>
            <h2>Posts</h2>
            {loading && <p>Loading data...</p>}
            {error && <p>{error}</p>}
            {covertedData && (
                <div>
                    {covertedData.map((post: IPosts) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            )}

        </>
    )
}

export default Posts