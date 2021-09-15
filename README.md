# studyVanillaAndGit
// 바닐라 자바스크립트랑 깃 공부용

// 21.09.15 recap{
    바닐라 자바스크립트 짧은시간에 복습
    의미 있는 commit 연습(기능별로, 가시성좋은 문구)
    코드 깨끗하게 쓰도록 노력하기.
}

# git을 사용하는 이유(장점)
개발 내역을 각 개발자의 로컬 저장소로 복사가 가능하여 나중에 서로 수정된 내용을 merge할 수 있음(분산적인 개발), 번경 이력이 많더라도 변경된 내용만 처리한다는 점(효율적인 개발), branch라는 개념을 통한 가지치기가 가능함(비선형적인 개발), commit내역을 통해 안전하게 프로젝트 운영가능(변경 이력 보장)

# GIT BASH

# 쓸모있는(기본) 단축키 및 명령어들.
ctrl + l / cd / m / mkdir

# git init
로컬저장소로 설정

# re -r .git
init을 취소하려면 아래의 명령어 입력
(단, 폴더가 비어있을때만 가능)

# git status
로컬저장소의 현재 상태를 보여줌

# git clone (원격저장소 주소)
해당 원격저장소 클론

# git push -u origin master
원격 저장소에 저장한다(master 브랜치)

# git pull
원격저장소로부터 변경된 정보를 다운받아온다.
(이 경우는 여러가지가 있는데 한가지 예를들어 내가 push를 하기전에 다른이가 먼저 해당 branch를 push를 한 경우에 발생.)

# git remote add origin [원격저장소 주소]
github 원격저장소와 연결

# git remote -v
현재 원격저장소 확인

# git add( .)
스테이지로 옮긴다. ( .: 모든 파일들을 옮김.)

# git rm -r --cached( .)
반대로 다시 워킹 디렉터리로 옮김. ( .: 모든 파일들을 옮김.)

# git commit (-a) -m "커밋 메세지"
간단한 커밋 메세지를 입력후에 커밋 (-a : staging area에 들어간 모든 파일들에 대해서)

# git log
커밋 이력 조회

# git branch (브랜치명)
브랜치 보기 (브랜치명 :해당 이름으로 새로운 브랜치 생성)

# git branch -m (브랜치명) (바꿀이름)
# git branch -d (삭제할 브랜치명)

# git checkout (브랜치명)
해당 브랜치로 워킹 디렉터리 변경

# git push --set-upstream origin (브랜치명)
새로운 브랜치에서 처음 push 할때 사용
