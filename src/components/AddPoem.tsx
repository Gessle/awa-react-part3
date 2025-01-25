import React, { useState } from "react"

interface AddPoemProps {
    onAdd: (poem: {vip: boolean, content: string}) => void
}

const AddPoem: React.FC<AddPoemProps> = ({onAdd}) => {
    const [vip, setVip] = useState<boolean>(false)
    const [content, setContent] = useState<string>("")


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(vip, content)

        onAdd({vip, content})

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Poem</label>
                <textarea placeholder="Add poem..." onChange={(e) => setContent(e.target.value)} value={content}/>
                <label>VIP 
                    <input type="checkbox" 
                    onChange={(e) => setVip(e.target.checked)}
                    checked={vip}/>
                </label>
                <button type="submit">Add Poem</button>
            </form>
        </div>
    )
}

export default AddPoem