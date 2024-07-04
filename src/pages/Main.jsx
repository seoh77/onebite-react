function Main() {
  return (
    <>
      <h1 className="text-xl mb-3 text-blue-500 font-semibold">Todos</h1>
      <div>
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-3" />
          <div className="mr-5">React 공부</div>
          <div>X</div>
        </div>
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-3" />
          <div className="mr-5">알고리즘 문제 풀기</div>
          <div>X</div>
        </div>
      </div>
      <div className="mt-10">
        <input
          type="text"
          name=""
          id=""
          className="border-solid border-b-2 border-gray-600"
          placeholder="할 일을 입력해주세요."
        />
        <button className="ml-3">등록</button>
      </div>
    </>
  );
}

export default Main;
