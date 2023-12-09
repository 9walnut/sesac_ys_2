import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onValid = (data) => {
    console.log("성공", data);
  };

  const onInvalid = (err) => {
    console.log("실패", err);
  };

  // register("Id") => {name = id}
  const genderRegister = register("gender", { required: "성별은 필수입니다." });

  console.log(watch("username"));
  console.log(watch("age"));

  return (
    <>
      <h4>react form 페이지</h4>
      {/* handleSubmit(onValid[, onInvaild]) */}
      {/* onVaild : 폼을 정상적으로 제출할 수 있는 상태일 떄, 실행시킬 수 있는 함수 */}
      {/* onInvalid : (선택값) 폼을 정상적으로 제출할 수 있는 상태일 때, 실행시킬 함수 */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="아이디"
          {...register("ID", {
            required: "아이디는 필수 입력입니다.",
          })}
        ></input>

        {errors.ID?.message}
        <br></br>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 입력입니다.",
            // minLength: 2,
            minLength: {
              value: 2,
              message: "이름은 2글자 이상 입력해야합니다.",
            },
          })}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="이메일"
          {...register("email", {
            required: "형식식을 맞춰주세여",
            // pattern: 2,
            // pattern: /'^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'/,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
              message: "형식을 맞춰주세여",
            },
            // 커스터마이징 ex) gmail 만 가입 등등
            // validate: (v) =>
            //   v.includes("gmail.com") || "gmail만 가입 가능합니다",
          })}
        ></input>

        {errors.email?.message}
        <br></br>
        <label htmlFor="gender-men">
          <input
            type="radio"
            name="gender"
            value="남"
            id="gender-men"
            {...genderRegister}
          ></input>
          남자
        </label>
        <label htmlFor="gender-women">
          <input
            type="radio"
            name="gender"
            value="여"
            id="gender-women"
            {...genderRegister}
          ></input>
          여자
        </label>
        {errors.gender?.message}
        <br></br>
        <select {...register("option", { required: "옵션은 필수값입니다" })}>
          <option value="">옵션</option>
          <option value="option-1">옵션</option>
          <option value="option-1">옵션</option>
          <option value="option-1">옵션</option>
        </select>
        {errors.option?.message}
        <br></br>
        <button>회원가입</button>
      </form>
      <br></br>

      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 입력입니다.",
            // minLength: 2,
            minLength: {
              value: 2,
              message: "이름은 2글자 이상 입력해야합니다.",
            },
          })}
        ></input>
        {errors.username?.message}
        <br></br>
        <input
          type="text"
          placeholder="age"
          {...register("age", {
            required: "0이상의 숫자만 입력 가능합니다.",
            pattern: {
              value: /^[0-9]*$/,
              message: "0이상의 숫자만 입력 가능합니다.",
            },
          })}
        ></input>
        {errors.age?.message}
        <br></br>
        <button>제출</button>
      </form>
    </>
  );
}
