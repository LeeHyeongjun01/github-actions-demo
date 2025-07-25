// 간단한 테스트 함수
function testFunction() {
    return "테스트 성공!";
}

// 테스트 실행
console.log("🧪 테스트 시작...");
const result = testFunction();
console.log("결과:", result);

if (result === "테스트 성공!") {
    console.log("✅ 모든 테스트가 통과했습니다!");
    process.exit(0);
} else {
    console.log("❌ 테스트가 실패했습니다!");
    process.exit(1);
} 