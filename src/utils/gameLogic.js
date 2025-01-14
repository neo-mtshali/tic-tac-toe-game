// Helper function to check for a winner
export const checkForWinner = (board) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    let isDraw = true;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
            isDraw = false;
            break;
        }
    }
    if (isDraw) return 'Draw';

    return null;
};