package org.donggle.backend.application.client;

import org.donggle.backend.application.service.request.PublishRequest;
import org.donggle.backend.domain.blog.BlogType;
import org.donggle.backend.ui.response.PublishResponse;

public interface BlogClient {

    PublishResponse publish(String accessToken, String content, PublishRequest publishRequest, final String titleValue);

    BlogType getBlogType();
}
