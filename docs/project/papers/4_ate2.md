---
sidebar_label: 04. Trích xuất thuật ngữ (p2)
---

# Học chuyển giao đa ngôn ngữ có lợi cho trích xuất thuật ngữ chéo ngành không?

## 1. Giới thiệu

Như trong bài trước, ta biết trích xuất thuật ngữ (ATE) là một tác vụ nghiên cứu phổ biến nhằm giúp giảm thiểu thời gian và công sức xác định các cụm từ thuật ngữ các lĩnh vực khác nhau bằng cách lọc ra một danh sách các cụm từ tiềm năng từ kho dữ liệu. Trong nghiên cứu này, chúng tôi tiếp tục thử nghiệm với XLM-R để đánh giá khả năng của
học đa ngôn ngữ và học chéo ngôn ngữ so với học đơn ngữ trong tác vụ ATE.

Các thử nghiệm được thực hiện trên kho dữ liệu ACTER bao gồm bốn lĩnh vực và ba ngôn ngữ (tiếng Anh, tiếng Pháp và tiếng Hà Lan) và trên kho dữ liệu tiếng Slovenia RSDO5 đã đề cập trong bài trước. Kết quả những thử nghiệm này là tiền đề chứng mình tiềm năng của các mô hình ngôn ngữ đa ngôn ngữ và ngôn ngữ chéo không chỉ cho việc trích xuất thuật ngữ mà còn cho các nhiệm vụ ngôn ngữ khác.

## 2. Mô hình

Chúng tôi đánh giá hiệu suất của mô hình XLM-R với 55 kịch bản khác nhau với 3 chế độ được mô tả như trong bảng dưới đây.

| Chế độ            | Mô tả                                                                                                                                                                        | Mục tiêu                                                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Học đơn ngữ       | Tinh chỉnh mô hình với một ngôn ngữ duy nhất và dự đoán trên tập kiểm thử thuộc ngôn ngữ đó.                                                                                 | Kiểm tra xem mô hình hoạt động tốt đến đâu khi có sẵn kho dữ liệu huấn luyện dành riêng cho ngôn ngữ đó.                                                                                |
| Học chéo ngôn ngữ | Tinh chỉnh mô hình với một hoặc nhiều ngôn ngữ (ví dụ: tiếng Anh và tiếng Hà Lan) và dự đoán với một ngôn ngữ khác không xuất hiện trong tập huấn luyện (ví dụ: tiếng Pháp). | Kiểm tra mô hình hoạt động tốt đến đâu khi không có kho dữ liệu huấn luyện dành riêng cho ngôn ngữ cần dự đoán và việc chuyển giao kiến ​​thức giữa các ngôn ngữ khác nhau tốt đến đâu. |
| Học đa ngôn ngữ   | Tinh chỉnh mô hình với tập huấn luyện bao gồm tất cả các ngôn ngữ, và sau đó dự đoán trên tập kiểm thử của từng ngôn ngữ.                                                    | Kiểm tra xem việc thêm nhiều dữ liệu từ các ngôn ngữ khác vào tập huấn luyện có cải thiện hiệu suất dự đoán của mô hình hay không.                                                      |

Tương tự như trong bài trước, ta chia tập dữ liệu thành 3 phần (huấn luyện - đánh giá - kiểm thử) và thử nghiệm học chuyển giao tri ​​thức từ lĩnh vực này sang lĩnh vực khác. Điều này cho phép ta đánh giá khả năng chuyển giao tri ​​thức giữa các lĩnh vực khác nhau của mô hình. Kết quả thử nghiệm được đánh giá thông qua 3 chỉ số đánh giá: Precision, Recall, F1-score.

## 3. Kết quả nghiên cứu

Kết quả thử nghiệm và phân tích chi tiết tham khảo thêm tại bài báo [Can Cross-Domain Term Extraction Benefit from Cross-lingual Transfer?](https://link.springer.com/chapter/10.1007/978-3-031-18840-4_26). Để triển khai lại, tham khảo mã nguồn tại [ate-2022](https://github.com/honghanhh/ate-2022).

## 4. Tham khảo

Tran, H.T.H., Martinc, M., Doucet, A., Pollak, S. (2022). [Can Cross-Domain Term Extraction Benefit from Cross-lingual Transfer?](https://link.springer.com/chapter/10.1007/978-3-031-18840-4_26). In: Pascal, P., Ienco, D. (eds) Discovery Science. DS 2022. Lecture Notes in Computer Science(), vol 13601. Springer, Cham. https://doi.org/10.1007/978-3-031-18840-4_26
