import React, { useEffect } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { repolist } from '../Redux/action'
// import Chart from './Highchart'


export const Home = () => {
    // const [currentpage, setCurrentpage] = useState(0)
    // const [reposperpage, setReposperpage] = useState(6)

    const dispatch= useDispatch()
    const repodata =useSelector((state)=>state.reducer.reposlist)
    console.log(repodata)

    useEffect(() => {
      dispatch(repolist())
    
      
    }, [dispatch])
    
    // const lastrepoindex = currentpage * reposperpage
    // const firstrepoindex = lastrepoindex-reposperpage

    // const currentRepos =data.slice(firstrepoindex, lastrepoindex)
    // console.log(currentRepos,"hello",data.slice(firstrepoindex, lastrepoindex))

    return (
        <div className='maincontainer'>
            <div className="searchcontainer">
                <h1> Most starred Repos</h1>
                {/* <select className="dropdown" id="">
                    <option value=""> hwllo</option>
                    <option value=""> hwllo</option>
                    <option value=""> hwllo</option>

                </select> */}
            </div>

            <div className="repolist">

                {repodata?.map((ele)=>{
                    return(
                        <>
                        <div className="reporow">
                            <div className="avatar">

                             <img src={ele.owner.avatar_url} alt="" />
                            </div>

                            <div className="repo-descp">
                            <h2>{ele.name}</h2>
                            <div className='description'>
                            <i>{ele.description}</i>
                            <select name="">
                                <option value="">commit</option>
                                <option value="">commit</option>
                                <option value="">commit</option>
                            </select>
                            </div>
                            
                            {/* <a href="https://api.github.com/users/mafintosh/repos">repos</a> */}
                            <div className="repos-btns">
                            <button>stars:{ele.stargazers_count}</button>
                            <button>issues:{ele.open_issues_count}</button>
                            <p>Last publish ({ele.updated_at.slice(11,ele.updated_at.length-1)}) by ({ele.owner.login})</p>

                            </div>
                           
                            </div>

                           


                           

                        </div>
                        <hr />
                        </>
                    )
                })}
             

            </div>


            {/* {
                repodata?.map((repo)=>{
                return     <Chart  repo ={repo}/>
                })
            } */}

            

        </div>
    )
}
