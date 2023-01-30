
let posts = undefined;
let currentIndex = undefined;

function withPosts(fn) {
    if (posts !== undefined) {
        fn(posts);
    } else {
        $.get(
            "/api/posts.json",
            function(data) {
                posts = data.items;
                fn(posts)
            }
        );
    }
}

function _renderPost(post) {
    return $(
`<article>
    <div class="text post-title" style="position: relative;">
        <h2>
            <a href="${post.url}">${post.title.headline} <em>${post.title.emphasis}</em></a>
        </h2>
        <p>${post.description}</p>
    </div>
    <div class="read-more"><a href="${post.url}" class="btn btn-expand">Leer más</a></div>
</article>`);
}

function _renderPosts(parentDivId, posts) {
    const parent = $(`#${parentDivId}`);
    for (const post of posts) {
        parent.append(_renderPost(post));
    }
}

function _update_index(count, intialIndex) {
    currentIndex = currentIndex === undefined ? intialIndex : currentIndex;
    const newIndex = currentIndex + count;
    const showRange = [currentIndex, newIndex];
    currentIndex = newIndex;
    return showRange;
}

function _maybeHideButton(loadMoreButtonId, postsCount) {
    if (currentIndex >= postsCount) {
        $(`#${loadMoreButtonId}`).hide();
    }
}

function loadMorePosts(containerId, loadMoreButtonId, count, intialIndex) {
    withPosts(function (posts) {
        const [from, to] = _update_index(count, intialIndex);
        const selectedPosts = posts.slice(from, to);
        _renderPosts(containerId, selectedPosts);
        _maybeHideButton(loadMoreButtonId, posts.length);
    });
}
