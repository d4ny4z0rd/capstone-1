import { useEffect, useState } from "react";

const News = () => {
	const [news, setNews] = useState(null);
	const [topic, setTopic] = useState("bitcoin");

	function handleTopic() {
		handleRequest(topic);
		setTopic("");
	}

	async function handleRequest(topic) {
		const req = await fetch(
			`https://api.webz.io/newsApiLite?token=88bd8ea1-f41d-4032-baf9-5bfc76e54f3e&q=${topic}`
		);
		const res = await req.json();
		setNews(res.posts[Math.floor(Math.random() * (5 - 1 + 1) + 1)]);
	}

	useEffect(() => {
		handleRequest(topic);
	}, []);

	if (news !== null) console.log(news.thread);

	return (
		<>
			<div>
				<input
					type="text"
					value={topic}
					onInput={(e) => setTopic(e.target.value)}
				/>
				<button onClick={handleTopic}>Submit</button>
			</div>
			{news ? (
				<div>
					<p>{news.title}</p>
					<p dangerouslySetInnerHTML={{ __html: news.highlightText }}></p>
					<img src={news.thread.main_image} alt="" />
				</div>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};

export default News;
