import { useMemo, useState } from "react";

export default function UseMemoPrac() {
  const [text, setText] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const wordCount = useMemo(
    (text, word) => {
      // 입력받은 문자열와 찾고자 하는 단어가 빈 문자열이 아닌 경우에만 계산
      if (text.trim() && word.trim()) {
        const words = text.split("");
        return words.filter((w) => w.includes(word)).length;
      }
      // 빈 문자열인 경우 0 반환
      return 0;
    },
    [text, searchWord]
  );

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스를 입력하세요"
      ></input>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="찾을 단어"
      ></input>
      <p>
        "{searchWord}" 단어 빈도수 : {wordCount}
      </p>
    </>
  );
}
