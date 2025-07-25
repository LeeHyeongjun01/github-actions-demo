# GitHub Actions 실습 프로젝트

## 🎯 프로젝트 소개
이 프로젝트는 GitHub Actions를 학습하고 실습하기 위한 데모 프로젝트입니다. 다양한 워크플로우를 통해 CI/CD 파이프라인의 기본 개념을 이해할 수 있습니다.

## 📁 프로젝트 구조
```
github-actions-demo/
├── .github/
│   └── workflows/
│       ├── hello-world.yml          # 기본 Hello World 워크플로우
│       ├── advanced-workflow.yml    # 고급 워크플로우 (코드 품질 + 배포)
│       ├── conditional-workflow.yml # 조건부 워크플로우 (환경별 배포)
│       └── monitoring.yml           # 워크플로우 모니터링
├── src/
│   ├── index.html                   # 메인 HTML 파일
│   ├── style.css                    # 스타일시트
│   └── script.js                    # JavaScript 파일
├── tests/
│   └── test.js                      # 테스트 파일
├── package.json                     # 프로젝트 설정
└── README.md                        # 프로젝트 문서
```

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/github-actions-demo.git
cd github-actions-demo
```

### 2. 로컬 테스트
```bash
# 의존성 설치 (실제로는 없지만 npm 명령어 테스트용)
npm install

# 테스트 실행
npm test

# 빌드 실행
npm run build
```

### 3. GitHub에 푸시
```bash
git add .
git commit -m "Add GitHub Actions workflows and demo files"
git push origin main
```

## 📊 워크플로우 설명

### 1. Hello World Workflow (`.github/workflows/hello-world.yml`)
- **트리거**: main 브랜치에 push 또는 PR
- **기능**: 
  - 코드 체크아웃
  - Node.js 설정
  - 테스트 실행
  - 빌드 실행
  - 성공 메시지 출력

### 2. Advanced Workflow (`.github/workflows/advanced-workflow.yml`)
- **트리거**: main, develop 브랜치에 push 또는 main으로 PR
- **기능**:
  - 코드 품질 검사
  - 테스트 실행
  - main 브랜치일 때만 GitHub Pages 배포

### 3. Conditional Workflow (`.github/workflows/conditional-workflow.yml`)
- **트리거**: main, develop, feature/* 브랜치에 push 또는 main으로 PR
- **기능**:
  - 브랜치별 환경 감지 (production/staging/development)
  - 환경별 조건부 배포

### 4. Monitoring Workflow (`.github/workflows/monitoring.yml`)
- **트리거**: 다른 워크플로우 완료 시
- **기능**: 워크플로우 실행 결과 모니터링 및 알림

## 🎮 실습 방법

1. **GitHub 저장소에서 Actions 탭 확인**
   - GitHub 저장소 페이지 → Actions 탭
   - 워크플로우 실행 상태 확인

2. **코드 수정 후 푸시**
   - `src/index.html` 파일 수정
   - 커밋 및 푸시
   - 워크플로우 자동 실행 확인

3. **다른 브랜치에서 실습**
   ```bash
   git checkout -b develop
   # 코드 수정
   git push origin develop
   ```

## 🔍 결과 확인

### 성공적인 실행 시:
- ✅ 모든 단계가 녹색으로 표시
- 📊 실행 시간 및 로그 확인 가능
- 🎉 커스텀 메시지 확인

### 실패 시 디버깅:
- ❌ 실패한 단계 확인
- 📝 로그 파일에서 오류 메시지 확인
- 🔧 코드 수정 후 재실행

## 🎓 학습 포인트

1. **워크플로우 구조**: `on`, `jobs`, `steps` 개념 이해
2. **조건부 실행**: `if`, `needs` 활용법
3. **환경별 배포**: 브랜치별 다른 동작 설정
4. **모니터링**: 워크플로우 실행 결과 추적
5. **실제 CI/CD**: 코드 → 테스트 → 빌드 → 배포 파이프라인

## 🚀 다음 단계

실습 완료 후 시도해볼 것들:
- [ ] Slack 알림 추가
- [ ] Docker 이미지 빌드 및 푸시
- [ ] AWS/Google Cloud 배포
- [ ] 자동 버전 태깅
- [ ] 보안 스캔 통합

## 📚 참고 자료

- [GitHub Actions 공식 문서](https://docs.github.com/en/actions)
- [GitHub Actions 예제](https://github.com/actions/starter-workflows)
- [워크플로우 문법](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

**Happy Coding! 🎉**
