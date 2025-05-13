// msgBox.jsx
function MsgBox({ userName, textcolor }) {
    return (
        <h1 style={{ color: textcolor }}>
            Hello {userName}
        </h1>
    );
}

export default MsgBox;
