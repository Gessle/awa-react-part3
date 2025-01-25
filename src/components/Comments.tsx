import useFetch from './useFetch'

interface IComments {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

const Comments = () => {
    const url: string = 'https://jsonplaceholder.typicode.com/comments'
    const {data, loading, error} = useFetch(url)

    const covertedData: IComments[] = data as IComments[]


    return (
        <>
            <h2>Comments</h2>
            {loading && <p>Loading data...</p>}
            {error && <p>{error}</p>}
            {covertedData && (
                <div>
                    {covertedData.map((comment: IComments) => (
                        <div key={comment.id}>
                            <h3>{comment.name}</h3>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}

        </>
    )
}

export default Comments
