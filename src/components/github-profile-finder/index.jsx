import { useEffect, useState } from 'react'
import './styles.css'
import User from './user';

export default function GithubProfileFinder() {

    const [userName, setUserName] = useState('Narendra-Sharma-26')
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();
        console.log(data)
        if (data) {
            setUserData(data)
            setLoading(false)
            setUserName('')
        }
    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData();
    }, [])

    if (loading) {
        return <h1>Loading Data ! Please Wait ...</h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    placeholder="Search Github Username..."
                    type="text"
                    value={userName}
                    onChange={(event) => setUserName
                        (event.target.value)
                    }
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            

            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>

    )
}