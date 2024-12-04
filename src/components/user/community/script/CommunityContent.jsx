import axios from "axios";
import { useEffect,useState } from "react";

import '../css/CommunityContent.css';

//24.11.25 지은 [완료] : CommunityContent 테스트.

 export default function CommunityContent(){
    const [contents, setContents] = useState([]);   //모든게시글 상태
    const [selectedContent, setSelectedContent] = useState(null); //선택된 게시글 상태
    const [formData, setFormData] = useState({
      title:"",
      content:"",
      category:"",
     isImportant: false,
    }); //공지생성/수정 폼데이터 상태
  const [isEditing, setIsEditing] = useState(false);//수정 여부 모드
  const API_BASE_URL="http://localhost:8080/api/boards"; //백엔드 API URL

  //컴포턴트가 마운트될대 모든 게시글 불러오기
  useEffect(() => {
    fetchAllBoards();//컴포넌트가 렌더링될때 실행
  },[]);

  //모든 게시글 불러오기
  const fetchAllBoards = async() => {
    try {
      const response = await axios.get(API_BASE_URL);
      setContents(response.data); //게시글 데이터를 상탱 맞게 
     } catch (error) {
      console.error("Error fetching boards:",error);
     }
};

   
// 특정게시글 데이터를 가져오는 함수
const fetchBoardById = async (id) => {
   try {
    const response = await axios.get (`${API_BASE_URL}/${id}`);
  setSelectedContent(response.data);
  } catch(error){
  console.error("Error creating board:",error);
}
};
//공지사항 생성
const createBoard = async() => {
  try{
    await axios.post(API_BASE_URL, formData);//post요청으로 데이터 전송
    fetchAllBoards(); // 새 데이터 반영을 위해 전체게시글 다시 불러오기
    resetForm(); //폼 초기화
  } catch(error){
    console.error("Error creating board:",error);//에러 로그 출력
  }
};

//공지사항 수정 함수
const updateBoard = async() =>{
  try{
    await axios.put(`${API_BASE_URL}/${selectedContent.noticeId}`,formData);//put요청
    resetForm();//폼 초기화
    setIsEditing(false);//수정모드 해제
} catch (error){
  console.error("Error updating board:",error);
}
};

//폼 데이터 초기화
const resetForm = () => {
  setFormData({
    title:"",
    content:"",
    category:"",
    isImportant: false,
  });
  setSelectedContent(null);
};

return(
  <div className= "community-content">
    <h1>Conmunity Board</h1>

    {/*공지 생성/수정폼*/}
    <div className="form-container">
        <h2>{isEditing? "Edint Notice" : "Create Notice"}</h2>
        <input
            type="text"
            placeholder="Title"
            value={formData.title}
        onChange={(e) => setFormData({ ...formData,title: e.target.value})}
        />
        <textarea
            
            placeholder="Content"
            value={formData.content}
            onChange={(e) =>setFormData({...formData, content: e.target.value})}
         />
         <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category:e.target.value})}
         />
         <label>
          Important:
          <input
            type="checkbox"
            checked={formData.isImportant}
            onChange={(e) =>
              setFormData({...formData,isImportant: e.target.checked})
            }
            />
         </label>
            <button onClick={isEditing ? updateBoard : createBoard}>
              {isEditing ? "Update Notice" : "Create Notice"}
            </button>
            {isEditing && <button onClick={resetForm}>Cancel</button>}
        </div>

        {/*게시글 목록*/}
        <div className="board-list">
          <h2>All Notices</h2>
          <ul>
            {contents.map((content) => (
              <li
                  key={content.noticeId}
                  className={`board-item ${content.isImportant ? "important" :""}`}
                   onClick={() => {
                      fetchBoardById(content.noticeId);
                      setIsEditing(true);
                      setFormData({
                        title:content.title,
                        content: content.content,
                        category:content.category,
                        isImportant:content.isImportant,
                      });
                   }}
                  >
                    {contents.title}{content.isImportant && <strong>(Important)</strong>}
                  </li>
                ))}
            </ul>
        </div>


        {/*선택된 게시글 상세보기*/}
        {selectedContent &&(
          <div className="board-detail">
              <h2>Notice Details</h2>
              <h3>{selectedContent.title}</h3>
              <p>{selectedContent.content}</p>
              <p>
                <strong>Category:</strong> {selectedContent.category}
              </p>
              <p>
                <strong>Create At:</strong> {selectedContent.createAt}
              </p>
              <p>
                <strong>Updated At:</strong> {selectedContent.UpdateAt}
              </p>
          </div>
        )}
      </div>
   );
};
