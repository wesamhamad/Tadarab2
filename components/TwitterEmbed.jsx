import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterEmbed = ({ tweetId }) => {
    return (
        <div className="py-10 flex justify-center">
            <div className="max-w-[800px] w-full">
                <h2 className="text-3xl font-bold text-center mt-20 mb-10">تـغريدة تهمـك</h2>
                <TwitterTweetEmbed
                    tweetId={tweetId}
                    options={{ align: 'center' }}
                />
            </div>
        </div>
    );
};

export default TwitterEmbed;
