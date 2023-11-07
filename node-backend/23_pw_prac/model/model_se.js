function model(Sequelize, DataTypes) {
  return Sequelize.define(
    "userInfos", // 첫번째 인자 - 테이블 이름
    {
      id: {
        // int not null Auto_increment primart key;
        type: DataTypes.INTEGER,
        allowNull: false, // true가 default
        primaryKey: true, // false 가 default
        autoIncrement: true, // false가 default
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      saltpw: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    }, // column 정의
    {
      tableName: "userInfos",
      freezeTableName: true, // 테이블 네임 고정(sequelize에서 간혹 테이블을 변경하기 때문)
      // insert into visitor >> create() 를 앞으로 활용할거임 이 과정에서 복수로 바꾸기도 해서 freezetablename을 사용함
      timestamps: false,
      //insert, update 시 시간을 자동으로 저장하겠다(true)
      //insert, update 시 시간을 자동으로 저장안하겠다(false)
    } //
  ); // 모델(테이블) 정의, sequelize 객체의 define 메서드를 이용
}

module.exports = model;
