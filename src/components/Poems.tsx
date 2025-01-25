import Poem from "./Poem"
import React from "react"

interface PoemProps {
    poems: {
        id: number
        vip: boolean
        poem: string
    }[]
}

const Poems: React.FC<PoemProps> = ({poems}) => {
    return (
        <div>
            <h1>Poems</h1>
            {poems.map((poem) => (
                <Poem key={poem.id} vip={poem.vip} poem={poem.poem} />
            ))}
          
        </div>
    )
}

export default Poems