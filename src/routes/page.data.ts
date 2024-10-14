export type SearchData = {
    prompt: string
  };

export const loader = async (): Promise<SearchData> => {
// const res = await fetch('https://api/user/profile');
    return await {
        prompt: ''
    };
};
